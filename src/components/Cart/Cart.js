import React, { Component } from 'react';
import Loader from '../Loader.js';
import CartTotal from './CartTotal.js'
import ItemContainer from './ItemContainer.js'
import '../../componentStyle/Cart/Cart.css'
import {constantValue} from '../../registry.js'

class Cart extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            loading : true,
            itemData : []         
        }

        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    componentDidMount()
    {
        const dataArrayInLocalStorage = JSON.parse(localStorage.getItem(constantValue.localStorageVariable));
        dataArrayInLocalStorage.forEach(element => {
            element.count = 1;
        });

        this.setState({
            itemData : dataArrayInLocalStorage,
            loading : false,
        })
    }

    countChange(value,id)
    {
        let updatedCount = value;

        if(value==="")
        {
            updatedCount=0;
        }
        updatedCount = parseInt(updatedCount);
        if(updatedCount>=0)
        {
            let updatedItemData = this.state.itemData;
            updatedItemData.map(arrayElement =>{
                if(arrayElement.id===id)
                {
                    if(updatedCount>arrayElement.maxQuantity)
                    {
                        alert("Maximum "+ arrayElement.maxQuantity +" quantity allowed for " + arrayElement.name + " !!");
                        updatedCount=arrayElement.maxQuantity;
                    }
                    arrayElement.count = updatedCount;
                }
                return arrayElement;
            })
            
            this.setState({
                itemData : updatedItemData
            })
        }
    }

    handleIncrease(id) {
        let updatedItemData = this.state.itemData;
        
        updatedItemData.forEach(arrayElement =>{
            if(arrayElement.id===id){
                if(arrayElement.count===arrayElement.maxQuantity){
                    alert("Maximum "+ arrayElement.maxQuantity +" quantity allowed for " + arrayElement.name + " !!");
                }
                else{
                    arrayElement.count++;
                }
            }
        })

        this.setState({
            itemData : updatedItemData
        })
    }

    handleDecrease(id) {
        let updatedItemData = this.state.itemData;
        
        updatedItemData.forEach(arrayElement =>{
            if(arrayElement.id===id && arrayElement.count>0)
            {
                arrayElement.count--;
            }
        })

        this.setState({
            itemData : updatedItemData
        })
    }

    handleRemove(id){
        let updatedItemData = this.state.itemData;

        updatedItemData=updatedItemData.filter(element => element.id!==id)

        console.log(updatedItemData)
        this.setState({
            itemData : updatedItemData
        })
    }

    render() { 
        return ( 
            <div>
                <h2 className="yourCartText">Your Cart</h2>
                <div className="cartDetailsContainer">
                    {this.state.loading ? 
                        <Loader/> :
                        <ItemContainer 
                            itemData={this.state.itemData}
                            onIncrease={(id) => this.handleIncrease(id)}
                            onDecrease={(id) => this.handleDecrease(id)}
                            onRemove = {(id) => this.handleRemove(id)}
                            countChange={(value,id) => this.countChange(value,id)}
                        />
                    }
                    <CartTotal itemData={this.state.itemData}/>
                </div>
            </div>
         );
    }
}
 
export default Cart;