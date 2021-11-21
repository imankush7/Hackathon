import { useState } from "react";
import React from "react";
import axios from "axios";
import "./dummyRegister.module.css";

function Register() {
    const [userData, setUserData] = useState({});
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleClick = () => {
        axios.post("http://localhost:2345/users", userData);
    }
    return (
        <div className="container">
            <h1 className="heading">User Login</h1>
            <div className="login">
                <input className="input-box" placeholder="Name" name="name" onChange={handleChange}/>
                <input className="input-box" placeholder="Email" name="email" onChange={handleChange}/>
                <input className="input-box" placeholder="Password" type="password" name="password" onChange={handleChange}/>
                <button className="Button" onClick={handleClick}>Submit</button>
            </div>
        </div>
    );
}

export { Register };