import React, { Component } from 'react';
import Loader from '../Loader.js';
import ItemContainer from './ItemContainer.js'
import '../../componentStyle/Home/Home.css'


class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            loading : true,
            itemData : []         
        }
    }

    componentDidMount()
    {
        fetch('./jsonData/productDetails.json')
            .then(response => response.json())
            .then(data => {
                this.setState(
                {
                    itemData : data
                })
            })
            .catch(err => {
                alert("Unable to fetch data!")
                console.error(err);
            })
            .finally(() => {
                this.setState(
                {
                    loading : false
                })
            })
    }

    render() { 
        return ( 
            <div>
                <h2 className="ourProductsText">Our Products</h2>
                <div>
                    {this.state.loading ? 
                        <Loader/> :
                        <ItemContainer itemData={this.state.itemData}/>
                    }
                </div>
            </div>
         );
    }
}
 
export default Home;