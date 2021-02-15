import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Button} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Left,Body,Right,Title } from 'native-base';
import axios from 'axios'
import {WebView} from 'react-native-webview';


const SongRequest =()=>{
    
      return(
        <WebView
        source={{
        uri: 'https://www.wiggletunes.co.za/song-request/'
        }}
        
     />
      )
}


export default SongRequest;