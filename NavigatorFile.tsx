import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './Containers/HomeScreen'
import MobileScreen from './Containers/MobileScreen'
import TvScreen from './Containers/TvScreen'
import ShoppingCartIcon from './Containers/ShoppingCartIcon'
import React from 'react'
import CartScreen from './Containers/CartScreen'

const AppStackNavigator= createStackNavigator({
    Home: HomeScreen,
    Mobile: MobileScreen,
    Tv: TvScreen,
    Cart: CartScreen
},{
    defaultNavigationOptions:{
        headerTintColor:'red',
        headerRight:()=><ShoppingCartIcon/>,
        headerTitle:'Shopping App'
    }
});

export default createAppContainer(AppStackNavigator);