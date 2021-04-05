import React, { Component } from 'react';
import BaseButton from '../BaseButton.js'
import '../../componentStyle/Home/Item.css';
import {constantValue} from '../../registry.js'

class Item extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            itemInCart : false
        }
    }

    handleAddToCart()
    {
        let updatedItemInCart = this.state.itemInCart;
        updatedItemInCart ? this.removeItemFromLocalStorage(this.props.itemData) : this.addItemInLocalStorage(this.props.itemData);
        updatedItemInCart = !updatedItemInCart;

        this.setState({
            itemInCart : updatedItemInCart
        })
    }

    addItemInLocalStorage(data){
        let dataArrayInLocalStorage = JSON.parse(localStorage.getItem(constantValue.localStorageVariable));
        dataArrayInLocalStorage.push(data);
        localStorage.setItem(constantValue.localStorageVariable,JSON.stringify(dataArrayInLocalStorage));
    }

    removeItemFromLocalStorage(data){
        let dataArrayInLocalStorage = JSON.parse(localStorage.getItem(constantValue.localStorageVariable));
        dataArrayInLocalStorage = dataArrayInLocalStorage.filter(arrayElement => arrayElement.id!==data.id);
        localStorage.setItem(constantValue.localStorageVariable,JSON.stringify(dataArrayInLocalStorage));
    }
    render() { 
        return ( 
            <div className="homeItemContainer">
                <img className="homeItemImage" src={this.props.itemData.image} alt={this.props.itemData.name + " Image"}/>
                <p className="homeItemName">{this.props.itemData.name}</p>
                <p className="homeItemPrice">{"₹ " + this.props.itemData.pricePerItem}</p>

                <BaseButton 
                    label = {this.state.itemInCart ? "Remove from cart" : "Add to cart"}
                    className = {this.state.itemInCart ? "removeFromCartButton" : "addToCartButton"} 
                    clickFunction={() => this.handleAddToCart()}/>
            </div>
         );
    }
}
 
export default Item;