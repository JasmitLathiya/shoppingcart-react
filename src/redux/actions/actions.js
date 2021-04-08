function setData(){

    return dispatch => {
        fetch('./jsonData/productDetails.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                    element.count = 1;
                    element.itemInCart = false;
                }
            )
            
            dispatch({
                type : 'SET_DATA',
                itemData : data
            })
        })
        .catch(err => {
            console.error(err);
            alert("Unable to fetch data !!!")
        })
        .finally(() => {
            dispatch({
                type : 'STOP_LOADING',
            })
        })
    }
}

function addToCart(id) {
    return{
        type : 'ADD_TO_CART',
        id : id
    }
}

function removeFromCart(id) {
    return{
        type : 'REMOVE_FROM_CART',
        id : id
    }
}

function increaseCount(id) {
    return{
        type : 'INCREASE_COUNT',
        id : id
    }
}

function decreaseCount(id) {
    return{
        type : 'DECREASE_COUNT',
        id : id
    }
}

function countChange(id,count) {
    return{
        type : 'COUNT_CHANGE',
        count : count,
        id : id
    }
}

function removeItem(id){
    return{
        type : 'REMOVE_ITEM',
        id : id
    }
}
export {setData,addToCart,removeFromCart,increaseCount,decreaseCount,countChange,removeItem}