import ConnectDB from "../../db/connect.js"
import VaccinationsQueries from "./vaccinationsQueries.js"
 
export const AddVaccination = async (UserId, DateOfVaccination, VaccinationNumber, ManufacturerId)=>{
    const pool = ConnectDB.getConnectionPool()
    try {
        console.log("pvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
        console.log(UserId);
        console.log(DateOfVaccination);
        console.log(VaccinationNumber);
        console.log(ManufacturerId.ManufacturerId);
             const Vaccination = (await pool.query(VaccinationsQueries.addVaccination,[UserId, DateOfVaccination, VaccinationNumber, ManufacturerId.ManufacturerId]))[0]
             console.log(Vaccination+"zvzvzvzvzvzvvzvzvzv");
             return Vaccination;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const GetUserVaccinations = async (UserId)=>{
    const pool = ConnectDB.getConnectionPool()
    try {
             const Vaccinations = (await pool.query(VaccinationsQueries.getVaccinationsByUserId,[UserId]))
             console.log(Vaccinations)
             if(Vaccinations)
             return Vaccinations;
        return []
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const GetNumUserVaccinations = async (UserId)=>{
    const pool = ConnectDB.getConnectionPool()
    try {
        console.log(UserId+"numVacccccccccccccccccccccccccc");
             const numOfVacc = (await pool.query(VaccinationsQueries.getNumUserVaccinations,[UserId]))[0]
             console.log(numOfVacc.total+"nummmmm");
             if(numOfVacc)
             return numOfVacc;
    } catch(err) {
        console.log('Error: ', err);
    }
}