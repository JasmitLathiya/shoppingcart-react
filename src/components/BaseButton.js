import React from 'react';

function BaseButton(props){
    return(
        <button 
            className={props.className} 
            onClick={props.clickFunction!==undefined ? () => props.clickFunction() : () => console.log("clickFunction not available")}
        >
            {props.label}
        </button>
    )
}

export default BaseButton;