import { StatusCodes } from "http-status-codes";
import { AddVaccination,GetUserVaccinations,GetNumUserVaccinations} from "../models/vaccinationsModel/vaccinationsModel.js"
import { GetUserById } from "../models/userModel/userModel.js";
import { getManufacturerId } from "../models/ManufacturerModel/ManufacturerModel.js"
export const AddNewVaccination = async(req,res)=>
{
    const {UserId,DateOfVaccination,ManufacturerName } = req.body
    console.log(ManufacturerName+"שםםםםםםםםםםםםםם");
    console.log(DateOfVaccination+"תאריךךךךךךךךךךךךךךךךך");
    console.log(UserId+"");
    // const user=await GetUserById(UserId)
    // if(!user)
    // {
    // res.status(StatusCodes.NOT_FOUND).json({error: "User does not exist"})
    // return
    // }
  const numOfVacc = await GetNumUserVaccinations(UserId)
  if(numOfVacc.total>=4)
  res.status(StatusCodes.BAD_REQUEST).json({error: "This user has already received 4 vaccinations"})
  else
  {
    const ManufacturerId=await getManufacturerId(ManufacturerName);
    console.log(ManufacturerId.ManufacturerId+"זההההההההההההההה");
    if(!ManufacturerId)
    {
      res.status(StatusCodes.NOT_FOUND).json({error: "Manufacturer does not exist"})
    return
    }
    const Vaccination = await AddVaccination(UserId,DateOfVaccination,numOfVacc.total+1,ManufacturerId); 
    if(!Vaccination)
    {
        res.status(StatusCodes.OK).json(Vaccination)
        return
    }
    else
    {
        res.status(500).json("err")
    }
  }
}
export const ShowUserVaccinationsNum =  async(req,res)=>{
  const {UserId} = req.body
  console.log(UserId+"jfndjfvbhjfhdfvbhfhjdb");
  const user=await GetUserById(UserId)
    if(!user)
    {
    res.status(StatusCodes.NOT_FOUND).json({error: "User does not exist"})
    return
    }
  const numOfVacc = await GetNumUserVaccinations(UserId)
  if(numOfVacc)
  res.status(StatusCodes.OK).json(numOfVacc.total)
   else
  {
    res.status(500).json("err")
  }
}




export const ShowUserVaccinations =  async(req,res)=>
 {
   const {UserId} = req.body
   const vacc = await GetUserVaccinations(UserId);
      if(!vacc){
         res.status(StatusCodes.BAD_REQUEST).json({error: "there are no vacc for this user"})
         return;
      }
      else{res.status(StatusCodes.OK).json(vacc)
         return
     }
 } 

 

// const getNumPeopleDidNotGet = async(req,res)=>
// {
//   const res1=await getNumPeopleDidNotGetYet()
//   if(!res1)
//   {
//   res.status(StatusCodes.NOT_FOUND).json({error: "User does not exists"})
//   return
//   }
//   else
//   {
//         res.status(StatusCodes.OK).json(res1)
//         return
//   }   
// }   
