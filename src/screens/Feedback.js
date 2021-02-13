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


const styles=StyleSheet.create({
    label:{
     marginBottom:10,
     fontFamily: 'Roboto'
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    listItem:{
        marginVertical:28,
    },
    textInput:{
        width:'90%',
        borderColor:'white',
        backgroundColor:'#f9f7f3',
        borderRadius:5,
        padding:15,
        borderBottomColor:'pink',
    },
    message:{
        width:'90%',
        height:200,
        borderColor:'white',
        backgroundColor:'#f9f7f3',
        borderRadius:5,
        padding:10,
        borderBottomColor:'pink',
        textAlignVertical:'top'
    },
    button:{
        marginTop:15,
        backgroundColor:'#60b2e5',
        borderRadius:20,
        padding:10,
        width:'70%'
    },
    text:{
        color:'white',
       textAlign:'center'
    },
    heading:{
        fontSize:43,
        marginBottom:100,
        color:'white'
    },
    card:{
        margin:10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        width:'80%',
        padding:30
        
    }
})

export default Feedback