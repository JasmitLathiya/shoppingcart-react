import React, { Component } from 'react';
import BaseButton from '../BaseButton.js'
import '../../componentStyle/Home/Item.css';
import { addToCart,removeFromCart } from "../../redux/actions/actions.js";
import {connect} from 'react-redux'


class Item extends Component {
    handleAddToCart()
    {
        this.props.itemData.itemInCart ? this.props.removeFromCart(this.props.itemData.id) : this.props.addToCart(this.props.itemData.id)
    }
    
    render() { 
        return ( 
            <div className="homeItemContainer">
                <img className="homeItemImage" src={this.props.itemData.image} alt={this.props.itemData.name + " Image"}/>
                <p className="homeItemName">{this.props.itemData.name}</p>
                <p className="homeItemPrice">{"₹ " + this.props.itemData.pricePerItem}</p>

                <BaseButton 
                    label = {this.props.itemData.itemInCart ? "Remove from cart" : "Add to cart"}
                    className = {this.props.itemData.itemInCart ? "removeFromCartButton" : "addToCartButton"} 
                    clickFunction={() => this.handleAddToCart()}/>
            </div>
         );
    }
}
 
const mapStateToProps = (state)=>
{
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart : (id) => {dispatch(addToCart(id))},
        removeFromCart : (id) => {dispatch(removeFromCart(id))}
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Item);