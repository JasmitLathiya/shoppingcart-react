import React, { Component } from 'react';
import Item from "./Item.js";
import '../../componentStyle/Cart/ItemContainer.css'
import EmptyCart from "./EmptyCart.js";
import {connect} from 'react-redux'


class ItemContainer extends Component {
    render() { 
        console.log(this.props.itemData);
        let cartIsEmpty=true;
        return ( 
            <div className="allItemContainer">    
                {
                    this.props.itemData.map(data => {
                        if(data.itemInCart)
                        {
                            cartIsEmpty=false;
                            return  <Item key = {data.id} itemData = {data}/>
                        }
                    })
                }

                {cartIsEmpty ? <EmptyCart/> : null}
            </div>
            );
    }
}
 
const mapStateToProps = (state) => {
    return{
        loading : state.loading,
        itemData : state.itemData,
    }
}

export default connect(mapStateToProps)(ItemContainer);