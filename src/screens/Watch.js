import React,{Component} from 'react';
import {WebView} from 'react-native-webview';
import { Header } from 'react-native-elements';
import {View} from 'react-native'
class Watch extends Component{


    render(){
        return(
            <WebView
                source={{
                uri: 'https://www.youtube.com/channel/UCJBqTfRmBYwAQJ7k4UZud7A'
                }}
             />
        )
              }
}



export default Watch;