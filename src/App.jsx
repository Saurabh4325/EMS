import React, { useState,useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployDashBorad from './components/Dashboard/EmployDashBorad'
import AdminDashBorad from './components/Dashboard/AdminDashBorad'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'


const App = () => {
  const [user, setUser] = useState('null')

  const handleLogin = (email,password)=>{
    console.log(email,password)
    if(email==='admin@example.com' && password==='123'){
      console.log("this is admin")
      setUser('admin')
      console.log(user)
    }else if(email==='employee1@example.com' && password==='123'){
      console.log("this is employe pannel")
      setUser('employee')
      console.log(user)
    }else{
      alert('Invalid Credentials')
    }
  }
  // handleLogin('employee1@example.com','123')
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : '' }
      {/* <EmployDashBorad /> */}
      {/* <AdminDashBorad /> */}
    </>
  )
}

export default App
