import React, { Component } from 'react';
import ItemContainer from './ItemContainer.js'
import '../../componentStyle/Home/Home.css'
import {connect} from 'react-redux'
import {setData} from '../../redux/actions/actions.js'


class Home extends Component {
    componentDidMount()
    {
        this.props.setData();
    }
    render() { 
        return ( 
            <div>
                <h2 className="ourProductsText">Our Products</h2>
                <ItemContainer/>
            </div>
         );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return{
//         setData : () => {
//             fetch('./jsonData/productDetails.json')
//             .then(response => response.json())
//             .then(data => {
//                 data.forEach(element => {
//                         element.count = 1;
//                         element.itemInCart = false;
//                     }
//                 )
//                 return dispatch( {
//                     type : 'SET_DATA',
//                     itemData : data
//                 })
//             })
//             .catch(err => alert("Unable to fetch data !!!"))
//         },
//     }
// }

// const mapStateToProps = (state) =>
// {
//     return{
//         state
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        setData : () => {dispatch(setData())}
    }
}

export default connect(null,mapDispatchToProps)(Home);