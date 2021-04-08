import React, { Component } from 'react';
import CartTotal from './CartTotal.js'
import ItemContainer from './ItemContainer.js'
import '../../componentStyle/Cart/Cart.css'

class Cart extends Component {
    render() { 
        return ( 
            <div>
                <h2 className="yourCartText">Your Cart</h2>
                <div className="cartDetailsContainer">
                    <ItemContainer/>
                    <CartTotal/>
                </div>
            </div>
         );
    }
}
 
export default Cart;