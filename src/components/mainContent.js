import React from 'react'
import { useEffect, useState,useContext } from 'react';
import axios from "axios";
import product_card from "../data/product_data";
import { ProductContext } from '../context/ProductContext';



const MainContent = () => {
    const { fetchdata } = useContext(ProductContext);
    const [users, setUsers] = useState("");
    const [userData, setUserData] = useState({});
    const [cart, setCart] = useState([]);
    const id = "6198988096a45c8f5a1fea96";
    const getUser = async () => {
        const res = await axios.get(`http://localhost:2345/users/${id}`)
        console.log("res", res);
        setUserData(res.data);
        setCart(res.data.cart);
    }
    console.log("cart",cart);
    console.log(userData);
    useEffect(() => {
        getUser();
    }, [])
    
    const handleCart = async (e) => {
        userData.cart.push(e);
        await axios.patch(`http://localhost:2345/users/${id}`, userData)
    }
    const listItems =fetchdata.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div onClick={() => { handleCart(item) }} className="btn">Add to cart</div>
            </div>
        </div>

    );
    return (
        <div className="main_content">
            
                   
               
            <h3> Hackathon__</h3>
                {listItems}
                    
           

            
           
            
            
        </div>
    )
}
export default MainContent;