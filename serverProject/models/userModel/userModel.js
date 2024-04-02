import ConnectDB from "../../db/connect.js"
import UserQueries from "./userQueries.js"
 export const AddUser=async(UserId,FirstName,LastName,City,Street,HouseNumber,BirthDate, PhoneNumber,Cellphone)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
             const user = (await pool.query(UserQueries.addUser,[UserId,FirstName,LastName,City,Street,HouseNumber,BirthDate, PhoneNumber,Cellphone]))[0]
             return user;
    } catch(err) {
        console.log('Error: ', err);
    }
}
 export const GetUserById = async (UserId) => {
     console.log(UserId+"ccc")
    const pool = ConnectDB.getConnectionPool()
    try {
        const user = (await pool.query(UserQueries.getUserById, [UserId]))[0]
        console.log(user);
        return user
    } catch(err) {
        console.log('Error: ', err);
    }
}
 export const GetAllUsers =async()=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
            const users = (await pool.query(UserQueries.getAllUsers))
             if(users)
             return users;
        return []
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const DeleteUser =async(UserId)=>
{
    const pool = ConnectDB.getConnectionPool()

    try {
            console.log(UserId+"fff");
            const res = await pool.query(UserQueries.deleteUser, [UserId])[0]
            // const res = await pool.query(UserQueries.deleteUser, [UserId]);
            if (res.affectedRows === 1) {
             return res;
            }
        else{console.log(`User ${UserId} not found.`);}
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const UpdateUserDetails = async(UserId,FirstName,LastName,City,street,HouseNumber,BirthDate, PhoneNumber,CellPhone)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
             const user = (await pool.query(UserQueries.updateUserDetails,[FirstName,LastName,City,street,HouseNumber,BirthDate, PhoneNumber,CellPhone,UserId]))[0]
             return user;
    } catch(err) {
        console.log('Error: ', err);
    }
}
