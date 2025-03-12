import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)
  
  useEffect(()=>{
    const {employees,admin}  = getLocalStorage()
    setUser({employees,admin})  
  },[])

  return (
    <div>
      <AuthContext.Provider value={user}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
