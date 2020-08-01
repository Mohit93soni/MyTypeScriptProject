import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import {mobile} from '../Data'
import ProductList from '../components/ProductList'
import {connect} from 'react-redux'

class MobileScreen extends React.Component {
  static navigationOptions={
    headerTitle:'Mobile Screen'
  }
  render() {
    return (
        <View style={Styles.container}>
            <ProductList product={mobile} onPress={this.props.addItemToCart}/>
        </View>
       
    )
      
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    addItemToCart:(product)=> dispatch({type:'ADD_CART',payload:product})
  }
}

const Styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default connect(null,mapDispatchToProps)(MobileScreen);