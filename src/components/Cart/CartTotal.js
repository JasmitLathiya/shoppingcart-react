import React, { Component } from 'react';
import BaseButton from '../BaseButton.js'
import '../../componentStyle/Cart/CartTotal.css'

class CartTotal extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            totalItem : 0,
            totalCost : 0
        }
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        let updatedState = nextProps.itemData.reduce((accumulator,currentValue) => {
            return {
                count : accumulator.count+currentValue.count,
                cost : accumulator.cost+currentValue.pricePerItem * currentValue.count,
            }
        },{count:0,cost:0})

        if(updatedState.count!==this.state.totalItem)
        {
            this.setState({
                totalItem : updatedState.count,
                totalCost : updatedState.cost
            })
            return true
        }
        else{
            return false
        }
    }

    render() { 
        return ( 
            <div className="cartTotalContainer">
                <p className="totalCartValueContainer">
                    <span className="totalDiscriptionText">Total Items :</span>
                    <span id="totalItem" className="totalValue">{this.state.totalItem}</span>
                </p>
                <p className="totalCartValueContainer">
                    <span className="totalDiscriptionText">Total Cost :</span>
                    <span className="totalValue">₹ <span id="totalCartCost">{this.state.totalCost}</span> </span>
                </p>
                <div className="proceedButtonContainer">
                    <BaseButton label="PROCEED TO PAY" className="proceedButton"/>
                </div>
            </div>
         );
    }
}
 
export default CartTotal;