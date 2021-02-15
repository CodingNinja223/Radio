import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,ScrollView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label} from 'native-base';
import email from 'react-native-email'
import axios from 'axios';
import Card from '../components/Card';
import {WebView} from 'react-native-webview';
class Feedback extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            message:''
        }
    }


    render(){
        return(
            <WebView
             source={{
             uri: 'https://www.wiggletunes.co.za/feedback-2/'
            }}
  
         />
        )
    }
}



export default Feedback