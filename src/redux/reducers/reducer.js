const initState = {
    loading : true,
    itemData : []
}

const reducer = (state = initState,action)=>{

    switch (action.type){
        case "STOP_LOADING":{
            return{
                ...state,
                loading : false
            }
        }
        case "SET_DATA":{
            return{
                ...state,
                itemData : action.itemData
            }
        }
        case "ADD_TO_CART":{
            let updatedItemData = state.itemData;
            updatedItemData.forEach(element => {
                if(element.id===action.id)
                {
                    element.itemInCart = true;
                }
            })
            return{
                ...state,
                itemData : updatedItemData,
            }
        }
        case "REMOVE_FROM_CART":{
            let updatedItemData = state.itemData;
            updatedItemData.forEach(element => {
                if(element.id===action.id)
                {
                    element.itemInCart = false;
                }
            })        
            return{
                ...state,
                itemData : updatedItemData,
            }
        }
        case "INCREASE_COUNT":{
            let updatedItemData = state.itemData;
            updatedItemData.forEach(element => {
                if(element.id===action.id)
                {
                    if(element.count>=element.maxQuantity)
                    {
                        alert("Maximum " + element.maxQuantity + " quantity allowed for " + element.name + "!!!")
                        element.count = element.maxQuantity;
                    }
                    else{
                        element.count++;
                    } 
                }
            })     
            return{
                ...state,
                itemData : updatedItemData,
            }
        }
        case "DECREASE_COUNT":{
            let updatedItemData = state.itemData;
            updatedItemData.forEach(element => {
                if(element.id===action.id)
                {
                    if(element.count>0){
                        element.count--;
                    }
                }
            })        
            return{
                ...state,
                itemData : updatedItemData,
            }
        }
        case "COUNT_CHANGE":{
            let updatedItemData = state.itemData;
            updatedItemData.forEach(element => {
                if(element.id===action.id)
                {
                    if(action.count>0){
                        element.count = parseInt(action.count);
                    }
                    if(action.count>element.maxQuantity)
                    {
                        alert("Maximum " + element.maxQuantity + " quantity allowed for " + element.name + "!!!")
                        element.count = element.maxQuantity;
                    }
                }
            })        
            return{
                ...state,
                itemData : updatedItemData,
            }
        }
        case "REMOVE_ITEM":{
            let updatedItemData = state.itemData;
            updatedItemData.forEach(element => {
                if(element.id===action.id)
                {
                    element.itemInCart=false;
                    element.count=0;
                }
            })        
            return{
                ...state,
                itemData : updatedItemData,
            }
        }
        default :{
            console.log(action.type + " not define");
        }
    }

    return state;
}

export default reducer;