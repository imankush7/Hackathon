import React from "react"
import './admin.css'
import { useState, useEffect } from "react";
import axios from "axios";




function Admin() {
    const [data, setData] = useState([{}]);




    useEffect(() => {
        forUsers();
        
        
    },[]);

    function forUsers() {
        axios.get("http://localhost:2345/orders")
            .then((res) => {
                setData(res.data);
            })
    }

    




    return (
        
                <div className= 'container'>
                    <h3 className='heading'>All Orders</h3>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Orders</th>
                                <th>Customer Id</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Placed At</th>
                            </tr>
                        </thead>
                <tbody>
                    {   
                        data.map((e) => 
                           
                        <>
                         <tr>
                                <td>{e._id }</td>
                                <td>{ e.userId}</td>
                                <td>Patna</td>
                                <td>
                                    <select>
                                        <option>Placed</option>
                                        <option>Confirmed</option>
                                        <option>Shipped</option>
                                        <option>Reached at Destination City</option>
                                        <option>Delivered</option>
                                        <option>Completed</option>
                                    </select>
                                </td>
                                <td>{ e.createdAt}</td>
                            </tr>
                            </>
                            
                    
)
                    }
                           
                            
                        </tbody>
                    </table>
                </div>
            )
}
export default Admin

