import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import { Header } from 'react-native-elements';
class Reviews extends Component{
    constructor(){
        super();
        this.state={

        }
    }


    render(){
      const myScript = `
    (function () {
        const footer=document.querySelector("#footer").style.display="none";
        const header=document.querySelector(".mobile-header-bar").style.display="none";
        const top=document.querySelector(".upb_row_bg").style.display="none";
    })();
    `;
        return(
          <WebView
            source={{
            uri: 'https://play.google.com/store/apps/details?id=com.wiggletunes.app'
            }}
  
         />
        )
    }
}


export default Reviews;