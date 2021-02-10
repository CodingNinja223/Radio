import React,{Component} from 'react';
import {View,FlatList,StyleSheet,ScrollView,Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,Title } from 'native-base';



class Cart extends Component{
constructor(){
    super();
    this.state={
        total:0,
        items:[]
    }
}


    render(){
        
        return(
           <View>
                <Header style={{backgroundColor:'white'}}>
                <Left/>
                <Body>
                    <Title style={{color:'black'}}>Cart</Title>
                </Body>
                <Right />
                </Header>
           </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        marginVertical:30,
       justifyContent:'center',
      alignItems:'center'
    },
    border:{
        borderRadius:4,
        width:200
    }
 
})

export default Cart;