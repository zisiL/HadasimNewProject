import ConnectDB from "../../db/connect.js"
import ManufacturerQueries from "./ManufacturerQueries.js"

export const getManufacturerName = async (ManufacturerId) =>{
    const pool = ConnectDB.getConnectionPool()
    try{
        const m = (await pool.query(ManufacturerQueries.getManufacturerNameById, [ManufacturerId]))[0]
         return m
    }
    catch(err){
        console.log('Error: ',err)
    }
}
export const getManufacturerId = async (ManufacturerName) =>{
    const pool = ConnectDB.getConnectionPool()
    try{
        console.log(ManufacturerName);
        const m = (await pool.query(ManufacturerQueries.getManufacturerIdByName, [ManufacturerName]))[0]
        console.log(ManufacturerName);
        console.log(m.ManufacturerId+"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
         return m
    }
    catch(err){
        console.log('Error: ',err)
    }
}
export const AddManufacturer = async (ManufacturerName) =>{
    const pool = ConnectDB.getConnectionPool()
    try{
        const res = (await pool.query(ManufacturerQueries.addManufacturer, [ManufacturerName]))[0]
        return res
    }catch(err){
        console.log('Error: ',err)
    }
}
export const GetAllManufacturers = async () =>{
    const pool = ConnectDB.getConnectionPool()
    try{
        const Manufacturers = (await pool.query(ManufacturerQueries.getAllManufacturers))
        console.log(Manufacturers);
        if(Manufacturers)
             return Manufacturers;
        return []
    }catch(err){
        console.log('Error: ',err)
    }

}
 