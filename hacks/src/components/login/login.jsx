


import { useState } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import {Link} from "react-router-dom"

const Container = styled.div`
    width: 100%;
    height: 92vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Login = styled.div`
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 400px;
    & > input {
        height: 50px;
        font-size: 100%;
        border-radius: 5px;
        border: 1px solid white;
        margin-bottom: 20px;
        outline: none;
    }
    & > button {
        height: 50px;
        border-radius: 5px;
        font-size: 100%;
        font-weight: bold;
        cursor: pointer;
    }
`;

const Heading = styled.h1`
    color: white;
    margin-bottom: 20px;
`;
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
        <>
       
                <input placeholder="Name" name="name" onChange={handleChange}/>
                <input placeholder="Email" name="email" onChange={handleChange}/>
                <input placeholder="Password" type="password" name="password" onChange={handleChange}/>
            <Link to="/"><button onClick={handleClick}>Submit</button></Link>
            </>
           
    );
}

export default Register ;