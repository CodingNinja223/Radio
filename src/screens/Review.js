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
      document.querySelector(.masthead).style.display="none";
      true; // note: this is required, or you'll sometimes get silent failures
    `;
        return(
          <WebView
            source={{
            uri: 'https://www.wiggletunes.co.za/contact/'
            }}
            injectedJavaScript={myScript}
         />
        )
    }
}


export default Reviews;