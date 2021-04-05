import React from 'react';
import Item from "./Item.js";
import '../../componentStyle/Home/ItemContainer.css'
import {constantValue} from '../../registry.js'


function ItemContainer(props){ 
    localStorage.setItem(constantValue.localStorageVariable,JSON.stringify([]));
    return ( 
        <div className="homeAllItemContainer">                
            {props.itemData.map(data => {
                return <Item key = {data.id} itemData = {data}/>
            })}
        </div>
        );
}


 
export default ItemContainer;