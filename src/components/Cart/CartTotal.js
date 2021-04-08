import React, { Component } from 'react';
import BaseButton from '../BaseButton.js'
import '../../componentStyle/Cart/CartTotal.css'
import {connect} from 'react-redux'

class CartTotal extends Component {

    render() { 
        let updatedState = this.props.itemData.reduce((accumulator,currentValue) => {
            return{
                    count : accumulator.count + (currentValue.itemInCart ? currentValue.count : 0),
                    cost : accumulator.cost + (currentValue.itemInCart ? currentValue.pricePerItem * currentValue.count : 0),
                }
        },{count:0,cost:0})
        return ( 
            <div className="cartTotalContainer">
                <p className="totalCartValueContainer">
                    <span className="totalDiscriptionText">Total Items :</span>
                    <span id="totalItem" className="totalValue">{updatedState.count}</span>
                </p>
                <p className="totalCartValueContainer">
                    <span className="totalDiscriptionText">Total Cost :</span>
                    <span className="totalValue">₹ <span id="totalCartCost">{updatedState.cost}</span> </span>
                </p>
                <div className="proceedButtonContainer">
                    <BaseButton label="PROCEED TO PAY" className="proceedButton"/>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return{
        itemData : state.itemData,
        state
    }
}
 
export default connect(mapStateToProps)(CartTotal);