import React,{Component} from 'react';
import {WebView} from 'react-native-webview';

import {View} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title  } from 'native-base';

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