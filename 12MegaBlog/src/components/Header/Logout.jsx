import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'
function Logout() {
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounder-full' onClick={logoutHandler}>Logout</button>
  )
}

export default Logout