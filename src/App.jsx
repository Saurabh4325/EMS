import React, { useState,useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployDashBorad from './components/Dashboard/EmployDashBorad'
import AdminDashBorad from './components/Dashboard/AdminDashBorad'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'


const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
    } else if (email === "employee1@example.com" && password === "123") {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };
  // handleLogin('employee1@example.com','123')
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
