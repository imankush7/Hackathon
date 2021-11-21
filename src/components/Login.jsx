import React from "react"
import {useState} from "react"
import MainContent from "./mainContent"
export default function Login(){

    const inistate={
        name:"",
        email:"",
        password:""
    }

    const [formData,setFormData]=useState(inistate)
    const [token,setToken]=useState(0)

    const handleChange=(e)=>{
            const {name,value}=e.target;
            setFormData({...formData,[name]:value})
    }

    const handleLogin=()=>{
        if(formData.email==="hackathon@gmail.com"&&formData.password==="12345")
        {
            setToken(1)
            alert("Successfully Logged In")
        }
        else
        {
            alert("Invalid Login Credentials")
        }
    }
    return !token? <div>
        <div>
            <input type="text" placeholder="Enter Name" onChange={handleChange} name="name" autoComplete="off" />
        </div>
        <div>
            <input type="text" placeholder="Enter email" onChange={handleChange} name="email" autoComplete="off"/>
        </div>
        <div>
            <input type="password" placeholder="Enter Password" onChange={handleChange} name="password" autoComplete="off"/>
        </div>
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    </div>:<><MainContent/></>
}
