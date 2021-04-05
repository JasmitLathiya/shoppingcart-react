import React from 'react';
import BaseButton from '../BaseButton.js'
import '../../componentStyle/Cart/Item.css'

function Item(props) {
        return (
            <div className="cartItemContainer">
                <img className="cartItemImage" src={props.itemData.image} alt={props.itemData.name + " Image"}/>

                <div className="itemDiscription">
                        <p className="cartItemName">{props.itemData.name}</p>
                        <p className="itemColor">Color : {props.itemData.color}</p>
                        <p className="itemSize">Size : {props.itemData.size}</p>
                </div>

                <div className="itemCounterContainer">
                    <BaseButton label="-" className="counterButton" clickFunction={() => props.onDecrease(props.itemData.id)}/>
                    <input 
                        className="itemCounter" 
                        type="number" 
                        value={props.itemData.count===0 ? "" : props.itemData.count}
                        onChange={(e)=> props.countChange(e.target.value,props.itemData.id)}
                    />
                        
                    <BaseButton label="+" className="counterButton" clickFunction={() => props.onIncrease(props.itemData.id)}/>    
                </div>

                <div className="itemPriceAndRemoveButtonContainer">
                    <div className="totalAndPerItemPriceContainer">
                        <p className="totalPrice">Total Price : ₹ <b>{props.itemData.count * props.itemData.pricePerItem}</b></p>
                        <p>Price per item : ₹ {props.itemData.pricePerItem}</p>
                    </div>
                    <div className="removeButtonContainer">
                        <BaseButton label="Remove" className="removeButton" clickFunction={() => props.onRemove(props.itemData.id)} />
                    </div>
                </div>

            </div>
         );
}
 
export default Item;