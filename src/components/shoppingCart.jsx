import React from "react";
import "./shoppingCart.css";

const ShoppingCart = () => {
    return (
        <div id="shoppingBagDiv">
            <div className="shoppingButtons">
                <button id="shoppingBagButton">Shopping Bag (<span id="cartCount">0</span>)</button>
                <button id="savedForLater">Saved for later (0)</button>
            </div>
            <div className="shoppingBadSecDiv">
                <div className="shoppingBagLeft">
                    <p className="shoppingHeading">Shopping Bag</p>
                    <div id="dynamicProductsDiv">
                        !-- Cart Items will be dynamically generated here  --
                    </div>
                </div>
            </div>
            <div className="bagBottomDiv">
                <div>
                    <form >
                        <input className='inp' type='text' placeholder='Enter Shipping Address' />
                        <input className='inp' type='number' placeholder='Enter Pincode' />
                        <input className='inp' type='number' placeholder='Enter Phone Number' />
                    </form>
                </div>
                <div className="totalDiv">
                    <div className="totalColumns">
                        <p>Subtotal</p>
                        <p id="subTotal"></p>
                    </div>
                    <div className="totalColumns">
                        <p>Estimated Tax</p>
                        <p><b>All inclusive</b></p>
                    </div>
                    <div className="totalColumns">
                        <p>Estimated Shipping</p>
                        <p><b>FREE</b></p>
                    </div>
                    <div className="finalHorLine"></div>
                    <div className="totalColumns">
                        <p>Estimated Total</p>
                        <p id="total"></p>
                    </div>
                    <button id="checkoutButton">Check Out</button>
                </div>
            </div>
        </div>
        ////
    )
}

export default ShoppingCart;