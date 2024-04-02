import React from 'react'
import { useState, useEffect } from 'react'
 import {useNavigate } from 'react-router-dom'
import axios from 'axios'

function Users({setUserId}) {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        
        const response = await axios.get('http://localhost:5000/api/v1/users/GetUsers');
        console.log(response.data,"::::::::::::::::::::::::::");
        setUsers(response.data);
      };
      fetchData();
    }, []);
  
    const handleEdit = (user) => {
      // ... קוד לטיפול בעריכת משתמש

    };
  
   /* const handleDelete = (UserId) => {
        fetch(`http://localhost:5000/api/v1/users/DeleteUser/${UserId}`, { method: 'DELETE'})
        .then(response => {
            if (response.ok) {
                // אם המחיקה הצליחה, נעדכן את הרשימה ללא החבר שנמחק
                setUsers(prevusers => prevusers.filter(users => users.users !== users));
                alert("הפעולה הושלמה בהצלחה")
                            
            } else {
                console.error('Error deleting member:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error deleting member:', error);
        });
    };*/



    const handleDelete = (UserId) => {
      // שאל את המשתמש אם הוא בטוח
  if (window.confirm(`האם אתה בטוח שברצונך למחוק את המשתמש ${UserId}?`)) {
    // שלח בקשה לשרת למחיקת המשתמש
    axios.delete(`http://localhost:5000/api/v1/users/DeleteUser/${UserId}`).then(() => {
      // הצג הודעה שהמשתמש נמחק
      alert('המשתמש נמחק בהצלחה!');
      // רענן את הדף
      window.location.reload();
    }).catch((error) => {
      // הצג הודעת שגיאה
      alert(`שגיאה במחיקת משתמש: ${error.message}`);
    });
  }
    };
    const rows = document.querySelectorAll('tr');
rows.forEach((row) => {
  row.addEventListener('click', () => {
    const userId = row.dataset.userId;
    handleRowClick(users.find((user) => user.UserId === userId));
  });
});
    const handleRowClick = (user) => {
        // פתח דף נפרד עם פרטי המשתמש
        // העבר את פרטי המשתמש לדף הנפרד
        // setUserId=user.UserId
        try{
        navigate("/UpdateUser/"+user.UserId)
        }
        catch(err){console.log(err);}

      };
  
    return (
      <div>
        <h1>רשימת משתמשים</h1>
        <table>
          <thead>
            <tr>
              <th>מזהה</th>
              <th>שם פרטי</th>
              <th>שם משפחה</th>
              <th>עיר</th>
              <th>רחוב</th>
              <th>מספר בית</th>
              <th>תאריך לידה</th>
              <th>מספר טלפון</th>
              <th>נייד</th>
              <th>מחיקה</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
                console.log(user,"pppppppppppppppppppppppppppppp"),
              <tr key={user.UserId}>
                  
                <td data-user-id={user.UserId} onClick={() => handleRowClick(user)}>{user.UserId}</td>
                <td data-user-id={user.UserId} onClick={() => handleRowClick(user)}>{user.FirstName}</td>
                <td data-user-id={user.UserId} onClick={() => handleRowClick(user)}>{user.LastName}</td>
                <td data-user-id={user.UserId} onClick={() => handleRowClick(user)}>{user.City}</td>
                <td data-user-id={user.UserId} onClick={() => handleRowClick(user)}>{user.Street}</td>
                <td data-user-id={user.UserId} onClick={() => handleRowClick(user)}>{user.HouseNumber}</td>
                <td data-user-id={user.UserId} onClick={() => handleRowClick(user)}>{user.BirthDate.substring(0, 10)}</td>
                <td data-user-id={user.UserId} onClick={() => handleRowClick(user)}>{user.PhoneNumber}</td>
                <td data-user-id={user.UserId} onClick={() => handleRowClick(user)}>{user.CellPhone}</td>
                <td><button onClick={() => handleDelete(user.UserId)}>מחיקה</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => window.location.href = '/AddUser'}>הוספת לקוח חדש</button>
        <button onClick={() => window.location.href = '/AddPatient'}>הוספת חולה חדש</button>
        <button onClick={() => window.location.href = '/AddVaccination'}>הוספת  חיסון</button>

      </div>
    );
  };
  

export default Users
