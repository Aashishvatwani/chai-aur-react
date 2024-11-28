import React,{useState,useContext} from "react"
import UserContext from "../context/UserContext"
function Profile(){
    const {user}=useContext(UserContext)
    
        if(user!=null){
            return <h1>Hello {user.username} </h1>
        }
        else{
            return <h1>Please Login</h1>
        }
    
} 
export default Profile