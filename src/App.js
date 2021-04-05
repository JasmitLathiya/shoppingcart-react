import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import './style.css';
import Navbar from './components/Navbar.js';
import Home from "./components/Home/Home.js";
import Cart from "./components/Cart/Cart.js";

class App extends Component {
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
        fetch('./jsonData/productDetails.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(element => {
                        element.count = 1;
                        element.show = true;
                    }
                )
                this.setState(
                {
                    loading : false,
                    itemData : data
                })
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
                itemdata : updatedItemData
            })
        }
    }

    handleIncrease(id) {
        let updatedItemData = this.state.itemData;
        
        updatedItemData.forEach(arrayElement =>{
            if(arrayElement.id===id)
            {
                arrayElement.count++;
            }
        })

        this.setState({
            itemdata : updatedItemData
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
            itemdata : updatedItemData
        })
    }

    handleRemove(id){
        let updatedItemData = this.state.itemData;
        
        updatedItemData.forEach(arrayElement =>{
            if(arrayElement.id===id)
            {
                arrayElement.count = 0;
                arrayElement.show = false;
            }
        })

        this.setState({
            itemdata : updatedItemData
        })
    }


    render() { 
        return(
                <BrowserRouter>     {/*  application can use route */}
                    <Navbar/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                </BrowserRouter>
            );
    }
}
 
export default App;