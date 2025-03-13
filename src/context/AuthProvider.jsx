import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)
  
  //useEffect is using for hte localstorage 
  useEffect(()=>{
    setLocalStorage()
    // const {employees}  = getLocalStorage()
    const storageData = getLocalStorage();
    if(storageData?.employees)
      setUserData(storageData.employees)  
  },[])

  return (
    <div>
      <AuthContext.Provider value={{userData, setUserData}}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
