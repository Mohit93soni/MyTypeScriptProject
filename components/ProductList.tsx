import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

interface Props{
    product,
    onPress
}
export default class ProductList extends Component<Props> {
    renderProduct=(products)=>{
        return products.map((item,index)=>{
            return(
                <View key={index} style={{padding:15}}>
                    <Button onPress={()=>this.props.onPress(item)} title={item.name+' - '+item.price} />
                </View>
            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderProduct(this.props.product)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
