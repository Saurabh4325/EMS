import React, { useState,useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployDashBorad from './components/Dashboard/EmployDashBorad'
import AdminDashBorad from './components/Dashboard/AdminDashBorad'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  setLocalStorage()
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  // const [userData,SetUserData] = useContext(AuthContext)

  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("LoggedInUser")
  //     if(loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[])

 


  const handleLogin = (email, password) => {
    console.log(email,password)
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

  return (
    <>
     {!user ? <Login handleLogin={handleLogin} /> : ''}
     {user?.role === 'admin' ? <AdminDashBorad changeUser={setUser} /> : (user?.role === 'employee' ? <EmployDashBorad changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App
