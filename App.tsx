import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
//import Hello from './Hello';
import {createStore} from 'redux'
import Cartitem from './reducer/CartItem'
import NavigatorFile from './NavigatorFile';

const Store=createStore(Cartitem);

export default class App extends React.Component {
  render(){
  return (
<Provider store={Store}> 
            <NavigatorFile/>
          </Provider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
