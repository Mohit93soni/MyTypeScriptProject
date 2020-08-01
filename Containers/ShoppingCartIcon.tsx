import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import {connect} from 'react-redux'
import { withNavigation } from 'react-navigation'
import CartScreen from './CartScreen'

const ShoppingCartIcon = props => {
  const Cart=CartScreen;
  return (
    <View style={{padding:5}} onPress={Cart}>
      <View style={{position:'absolute',height:30,width:30,justifyContent:'center',
      backgroundColor:'rgba(95,197,123,0.8)',borderRadius:15, alignItems:'center',right:15,bottom:15, zIndex:2000}}>
      <Text style={{fontWeight:'bold',color:'white'}}>{props.cartItem.length}</Text>
      </View>
      <Ionicons name="ios-cart" size={24} color="darkblue" onPress={() => props.navigation.navigate('Cart')} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
const mapStateToProps=(state)=>{
  return{
    cartItem: state
  }
}
export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));
