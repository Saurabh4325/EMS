import React, { useState,useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployDashBorad from './components/Dashboard/EmployDashBorad'
import AdminDashBorad from './components/Dashboard/AdminDashBorad'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const authData = useContext(AuthContext)
  // console.log(authData.employees.employees.find((e)=> email==e.email))

  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("LoggedInUser")
  //     if(loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData])


  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser({role:"admin"});
      localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin'}))
    } else if (email === "employee1@example.com" && password === "123") {
      setUser({role:"employee"});

      localStorage.setItem('LoggedInUser',JSON.stringify({role:'employee'}))

    } else {
      alert("Invalid Credentials");
    }
  };

  // const handleLogin = (email,password) =>{
  //   if (email === "admin@example.com" && password === "123") {
  //         setUser("admin");
  //   }else if(authData && authData.employees.find((e)=>{
  //     setUser()
  //   }))
  // }

  return (
    <>
     {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashBorad />
      ) : (
        <EmployDashBorad />
      )}
    </>
  )
}

export default App
