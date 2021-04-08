import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import './style.css';
import Navbar from './components/Navbar.js';
import Home from "./components/Home/Home.js";
import Cart from "./components/Cart/Cart.js";

class App extends Component {

    render() { 
        return(
                <BrowserRouter>
                    <Navbar/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                </BrowserRouter>
            );
    }
}

export default App;