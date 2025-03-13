// import React, { useState,useEffect, useContext } from 'react'
// import Login from './components/Auth/Login'
// import EmployDashBorad from './components/Dashboard/EmployDashBorad'
// import AdminDashBorad from './components/Dashboard/AdminDashBorad'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'
// import { AuthContext } from './context/AuthProvider'


// const App = () => {
//   const [user, setUser] = useState(null)
//   const [loggedInUserData, setLoggedInUserData] = useState(null)

//   const {userData,setUserData} = useContext(AuthContext)
//   console.log(userData)

//   useEffect(() =>{
//     const LoggedInUser = localStorage.getItem('loggedInUserData')

//     if(loggedInUserData) {
//       const userData= JSON.parse(LoggedInUser)
//       setUserData(userData.role)
//       // setLoggedInUserData(userData.data)
//     }

//   },[])

 


//   const handleLogin = (email, password) => {
//     console.log(email,password)
//     if (email === "admin@e.com" && password === "123") {
//       setUser("admin");
//       localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin'}))
//     } else if (userData) {
    
//       // const employee = userData.find((item) =>{ item.email === email && item.password === password});
//       const employee = userData.find((item) => item.email === email && item.password === password);
//       if(employee) {
//       if(email==="e@e.com" && password==="123") {
//         setUser("employee");
//         setLoggedInUserData(employee)
//         localStorage.setItem('LoggedInUser',JSON.stringify({role:'employee', data:employee}))
//       }

//     } else {
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <>
//      {!user ? <Login handleLogin={handleLogin} /> : ''}
//      {user === 'admin' ? <AdminDashBorad changeUser={setUser} /> : (user === 'employee' ? <EmployDashBorad changeUser={setUser} data={loggedInUserData} /> : null) }
//     </>
//   )
// }

// export default App



import React, { useState, useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployDashBorad from "./components/Dashboard/EmployDashBorad";
import AdminDashBorad from "./components/Dashboard/AdminDashBorad";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { userData, setUserData } = useContext(AuthContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("LoggedInUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser.role);
      if (parsedUser.role === "employee") {
        setLoggedInUserData(parsedUser.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@e.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (item) => item.email === email && item.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "LoggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" ? (
        <AdminDashBorad changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployDashBorad changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
