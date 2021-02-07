import React,{Component} from 'react';
import {WebView} from 'react-native-webview';
import { Header } from 'react-native-elements';
import {View} from 'react-native';
class Shop extends Component{



    render(){
        return(
            <WebView
           source={{
            uri: 'https://www.wiggletunes.co.za/shop/'
            }}
          />
        )
    }
}


export default Shop;