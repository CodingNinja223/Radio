import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Button} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Left,Body,Right,Title } from 'native-base';
import axios from 'axios'
import {WebView} from 'react-native-webview';


const SongRequest =()=>{
      const myScript = `
      (function () {
          const head=document.body.style.backgroundColor="#161616";
      })();
      `;
      return(
        <WebView
        source={{
        uri: 'https://www.wiggletunes.co.za/song-request.html'
        }}
        injectedJavaScript={myScript}
     />
      )
}


export default SongRequest;