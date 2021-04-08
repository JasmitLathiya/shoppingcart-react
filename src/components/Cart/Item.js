import React, { Component } from 'react';
import BaseButton from '../BaseButton.js'
import '../../componentStyle/Cart/Item.css'
import {increaseCount,decreaseCount,countChange,removeItem} from '../../redux/actions/actions.js'
import {connect} from 'react-redux'

class Item extends Component {

    render() { 
        return (
            <div className="cartItemContainer">
                <img className="cartItemImage" src={this.props.itemData.image} alt={this.props.itemData.name + " Image"}/>

                <div className="itemDiscription">
                        <p className="cartItemName">{this.props.itemData.name}</p>
                        <p className="itemColor">Color : {this.props.itemData.color}</p>
                        <p className="itemSize">Size : {this.props.itemData.size}</p>
                </div>

                <div className="itemCounterContainer">
                    <BaseButton label="-" className="counterButton" clickFunction={() => this.props.decreaseCount(this.props.itemData.id)}/>
                    <input 
                        className="itemCounter" 
                        type="number" 
                        value={this.props.itemData.count===0 ? "" : this.props.itemData.count}
                        onChange={(e)=> {this.props.countChange(this.props.itemData.id,e.target.value)}}
                    />
                    <BaseButton label="+" className="counterButton" clickFunction={()=> this.props.increaseCount(this.props.itemData.id)}/>    
                </div>

                <div className="itemPriceAndRemoveButtonContainer">
                    <div className="totalAndPerItemPriceContainer">
                        <p className="totalPrice">Total Price : ₹ <b>{this.props.itemData.count * this.props.itemData.pricePerItem}</b></p>
                        <p>Price per item : ₹ {this.props.itemData.pricePerItem}</p>
                    </div>
                    <div className="removeButtonContainer">
                        <BaseButton label="Remove" className="removeButton" clickFunction={() => this.props.removeItem(this.props.itemData.id)} />
                    </div>
                </div>

            </div>
         );    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        increaseCount : (id) => {dispatch(increaseCount(id))},
        decreaseCount : (id) => {dispatch(decreaseCount(id))},
        countChange : (id,count) => {dispatch(countChange(id,count))},
        removeItem : (id) => {dispatch(removeItem(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Item);
