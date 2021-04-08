import React, { Component } from 'react';
import '../../componentStyle/Home/ItemContainer.css'
import Loader from '../Loader.js'
import Item from './Item.js'
import {connect} from 'react-redux'

class ItemContainer extends Component {
    render() { 
        return ( 
            this.props.loading ?
            <Loader/> :
            <div className="homeAllItemContainer">
                {
                    this.props.itemData.map(data => {
                        return <Item key = {data.id} itemData={data}/>
                    })
                }
            </div>
            );
    }
}
 
const mapStateToProps = (state) => {
    return{
        loading : state.loading,
        itemData : state.itemData
    }
}
 
export default connect(mapStateToProps)(ItemContainer);
