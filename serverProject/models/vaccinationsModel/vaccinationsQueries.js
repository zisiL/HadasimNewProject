//const getVaccinationsByUserId2="SELECT firstName,dateReceivingVaccine,companyName,numV FROM vaccinations natural join users natural join company where userId =?"
//const numOfPeopleDidNotNotGetV="SELECT count(*) as number FROM users WHERE userId NOT IN (SELECT userId FROM vaccinations)"

const getVaccinationsByUserId = "SELECT UserId,VaccinationId,DateOfVaccination,VaccinationNumber,ManufacturerName FROM  Vaccinations natural join Manufacturer WHERE UserId = ?"
const addVaccination = "INSERT INTO vaccinations(UserId, DateOfVaccination, VaccinationNumber, ManufacturerId) VALUES(?,?,?,?)"
const getNumUserVaccinations = "SELECT COUNT(*) AS total FROM vaccinations WHERE UserId = ?"
export default
{
    getVaccinationsByUserId,
    addVaccination,
    getNumUserVaccinations
    
}