import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";






function Cart() {
    const [data, setData] = useState();
    const [prod, setProd] = useState({});

    useEffect(() => {
        forUsers();
        
        
    },[]);

    function forUsers() {
        axios.get("http://localhost:2345/users/6198988096a45c8f5a1fea96")
            .then((res) => {
                setData(res.data.cart[0]);
                forProduct();
            })
    }

    function forProduct() {
        axios.get(`http://localhost:2345/products/${data}`)
            .then((res) => {
                setProd(res);
            })
        
    }

    const handleOrder = () => {
        const result = {
             productId:data ,
    userId:"6198988096a45c8f5a1fea96",
    
        }
        axios.post("http://localhost:2345/orders",result)
            .then((res) => {
                console.log(res);
        })
    }





    




  return (
      <div >
          {console.log(prod.data)}
          
          <h1>this is cart</h1>
          <div className="card" key={prod.data.id}>
            <div className="card_img">
                <img src={prod.data.thumb} />
            </div>
            <div className="card_header">
                <h2>{prod.data.product_name}</h2>
                <p>{prod.data.description}</p>
                <p className="price">{prod.data.price}<span>{prod.data.currency}</span></p>
                
            </div>
        </div>

          
          <input type="text" name="" id="" placeholder="Address"/>
          <input type="text" name="" id="" placeholder="Pincode" />
          <input type="text" name="" id="" placeholder="Mobile" />
          <input type="checkbox" name="COD" value="cod" title="COD" id="" />
          <button onClick={handleOrder}>Order Now</button>
    
     
    </div>
  );
}

export default Cart;