import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import ProductList from '../components/ProductList'
import {tv} from '../Data'
import { connect } from 'react-redux';

interface Props{
  addItemToCart
}
class TvScreen extends React.Component<Props> {
  static navigationOptions={
    headerTitle:'Tv Screen'
  }
  render() {
    return (
        <View style={Styles.container}>
            <ProductList product={tv} onPress={this.props.addItemToCart}/>
        </View>
    )     
  }
}
const Styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

const mapDispatchToProps=dispatch=>{
  return{
    addItemToCart:(product)=> dispatch({type:'ADD_CART',payload:product})
  }
}

export default connect(null,mapDispatchToProps)(TvScreen);