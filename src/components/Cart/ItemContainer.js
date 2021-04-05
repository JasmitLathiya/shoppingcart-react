import React from 'react';
import Item from "./Item.js";
import EmptyCart from "./EmptyCart.js";
import '../../componentStyle/Cart/ItemContainer.css'

function ItemContainer(props){ 
    return ( 
        <div className="allItemContainer">    

            {props.itemData.length===0 ?
                <EmptyCart/> :
                props.itemData.map(data => {
                    return  <Item 
                                key = {data.id} 
                                itemData = {data} 
                                onIncrease = {(id) => props.onIncrease(id)}
                                onDecrease = {(id) => props.onDecrease(id)}
                                onRemove = {(id) => props.onRemove(id)}
                                countChange = {(value,id) => props.countChange(value,id)}    
                            />
                })
            }
        </div>
        );
}
 
export default ItemContainer;