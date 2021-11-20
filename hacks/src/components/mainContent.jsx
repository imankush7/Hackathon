import React from 'react'
import { useEffect, useState,useContext } from 'react';
import axios from "axios"
import product_card from "../data/product_data"
import { ProductContext } from '../context/ProductContext';



const MainContent = () => {
    const { fetchdata } = useContext(ProductContext);
    const [users, setUsers] = useState("");
    const [cart, setCart] = useState([]);

   
    
    const handleCart = (e) => {
        /*let data = {
            
            cart:e
        }
        try {
            await fetch("http://localhost:2345/users/6198988096a45c8f5a1fea96", {
                method: "PATCH",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            
        }
        catch (err) {
            console.log(err);
        }*/
        
        setCart([...cart,e])
        axios.patch("http://localhost:2345/users/6198988096a45c8f5a1fea96",{
                    cart:cart
        })
            .then((res) => {
                console.log(res.data);
               
        })



        
        
    }
    
    



    {console.log(fetchdata)}
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