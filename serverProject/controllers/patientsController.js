import { StatusCodes } from "http-status-codes";
import {AddPatient,  GetPatientById,  GetAllPatients,  GetPatient} from "../models/patientsModel/patientModel.js"
import { GetUserById } from "../models/userModel/userModel.js";
const AddNewPatient = async(req,res)=>
{
  console.log("innnnnnnnnnnnnnnnnnnnn");
  const {UserId,SickDate,RecoveryDate} = req.body
  console.log(req.body.SickDate+"ggg");
  if(RecoveryDate<SickDate)
  {
    res.status(StatusCodes.BAD_REQUEST).json({error: "The date data is incorrect"})
    return;  
  }
    console.log(UserId+"vvv");
    const user=await GetUserById(UserId)
    console.log(user+"bbb");
    if(!user)
    {
    res.status(StatusCodes.NOT_FOUND).json({error: "User does not exist"})
    return;
    }
  const exist=await GetPatient(UserId)

  if(exist)
  {
  res.status(StatusCodes.EXPECTATION_FAILED).json({error: "This user has been sick before"})
  return;
  }
  else
  {
    const patient = await AddPatient(UserId,SickDate,RecoveryDate); 
    if(!patient)
    {
        res.status(StatusCodes.OK).json(patient)
        return
    }
    else
    {
        res.status(500).json("cant add")
        return
    }
  }
}
const ShowPatientById = async(req,res)=>
{
  console.log("@@@@@@@@@@@@@@@@@@@@@");

  console.log(req.params.UserId+"         eq!!!!!!!!!!!!!!!!!!!");
  // const UserId=req.params.UserId;
  // console.log(UserId+"hhh");

  const exist=await GetPatient(req.params.UserId)
  console.log(exist.UserId+"vvvvvfr");
  console.log(exist);
  if(!exist)
  {
  res.status(StatusCodes.BAD_REQUEST).json({error: "patient does not exists"})
  return
  }
  else
  {
    // const patient=await GetPatientById(UserId)
    // console.log(patient+"vvvvvvv");
        res.status(StatusCodes.OK).json(exist)
        return
  }   
} 
const ShowAllPatients = async(req,res)=>
{
  const patients = await GetAllPatients();
     if(!patients){
        res.status(StatusCodes.BAD_REQUEST).json({error: "there are no patients"})
        return;
     }
     else{res.status(StatusCodes.OK).json(patients)
        return
    }
} 
// const getNumOfPatInMonth = async(req,res)=>
// {
//   const numbers=await numOfPatientINMonth()
//   if(!numbers)
//   {
//   res.status(StatusCodes.NOT_FOUND).json({error: "failed"})
//   return
//   }
//   else
//   {
//         res.status(StatusCodes.OK).json(numbers)
//         return
//   }   
// } 
export
{
  AddNewPatient,
    ShowPatientById,
    ShowAllPatients
    //getNumOfPatInMonth
}