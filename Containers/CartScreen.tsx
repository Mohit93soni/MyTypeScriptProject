import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProductList from '../components/ProductList'
import {connect} from 'react-redux'

const CartScreen=(props)=> {
    console.log('cartS--',props.cartItem);
    return (
        <View style={styles.container}>
            {props.cartItem.length > 0 ?
            <ProductList product={props.cartItem} onPress={props.removeItem}/> :
            <Text>No item in Cart</Text> 
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

const mapStateToProps=(state)=>{
    return{
      cartItem: state
    }
  }

const mapDispatchToProps=dispatch=>{
    return{
        removeItem:(product)=>dispatch({type:'REMOVE_CART',payload:product})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartScreen);