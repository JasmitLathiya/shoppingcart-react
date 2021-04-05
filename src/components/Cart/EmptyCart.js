import React from 'react';
import '../../componentStyle/Cart/EmptyCart.css'

function EmptyCart() {
    return(
        <div className="emptyCart">
            <h1>Cart is empty !!</h1>
            <h2>Please add atleast 1 item in cart to proceed</h2>
        </div>
    )
}

export default EmptyCart