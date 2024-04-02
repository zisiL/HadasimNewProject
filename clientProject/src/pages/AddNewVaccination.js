// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// abc
// const AddNewVaccination = () => {
//   const [isAdding, setIsAdding] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [manufacturerOptions, setManufacturerOptions] = useState([]);
//   const [dateOfVaccination, setDateOfVaccination] = useState(null);
//   const [userId, setUserId] = useState('');

//   useEffect(() => {
//     const fetchManufacturers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/v1/Manufacturers/showManufacturers');
//         const options = response.data.map((manufacturer) => ({
//           value: manufacturer.ManufacturerId,
//           label: manufacturer.ManufacturerName,
//         }));
//         setManufacturerOptions(options);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchManufacturers();
//   }, []);

//   const handleManufacturerChange = (manufacturerId) => {
//     // ...
//   };
//   const handleAddVaccination = async (manufacturerId) => {
//     setIsAdding(true);
//     try {
//       await axios.post('http://localhost:5000/api/v1/vaccinations/AddVaccination', {
//         UserId: userId,
//         ManufacturerId: manufacturerId,
//         DateOfVaccination: dateOfVaccination.toISOString().substring(0, 10),
//       });
//       alert('החיסון נוסף בהצלחה!');
//     } catch (err) {
//       setErrorMessage(err.response.data.message);
//     } finally {
//       setIsAdding(false);
//     }
//   };

//   return (
//     <div>
//       <h2>הוספת חיסון חדש</h2>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       <div>
//         <label htmlFor="userId">מזהה משתמש:</label>
//         <input
//           id="userId"
//           name="userId"
//           type="text"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="manufacturer">יצרן:</label>
//         <select id="manufacturer" name="manufacturer" onChange={(e) => handleManufacturerChange(e.target.value)}>
//           {manufacturerOptions.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label htmlFor="dateOfVaccination">תאריך החיסון:</label>
//         <DatePicker
//           id="dateOfVaccination"
//           name="dateOfVaccination"
//           selected={dateOfVaccination}
//           onChange={(date) => setDateOfVaccination(date)}
//         />
//       </div>
//       <button onClick={handleAddVaccination}>הוסף חיסון</button>
//     </div>
//   );
// };

// export default AddNewVaccination;
