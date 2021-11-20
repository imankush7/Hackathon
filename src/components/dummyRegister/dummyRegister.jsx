import { useState } from "react";
import React from "react";
import axios from "axios";
function Register() {
    const [userData, setUserData] = useState({});
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }
    console.log(userData);

    const handleClick = () => {
        axios.post("http://localhost:2345/users", userData);
    }
    return (
        <div>
            <input placeholder="Name" name="name" onChange={handleChange}/>
            <input placeholder="Email" name="email" onChange={handleChange}/>
            <input placeholder="Password" type="password" name="password" onChange={handleChange}/>
            <button onClick={handleClick}>Submit</button>
        </div>
    );
}

export { Register };