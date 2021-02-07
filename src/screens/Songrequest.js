import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import axios from 'axios'


class SongRequest extends Component{
constructor(){
    super();
    this.state={
        request:''
    }
}



sendRequestHandler=()=>{
    axios.post('https://embed.radio.co/request/w53ee742.js',this.state.request)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

    this.setState({
      request:''
    })
}

    render(){
      return(
      
         
        <View style={styles.container}>
          <Text style={styles.headerText}>SEND A SONG REQUEST</Text>
          <View style={styles.container}>
              <TextInput
                style={styles.textInput}
                placeholder="Send a song request"
                onChangeText={(e)=> this.setState({request:e})}
              />
            <View>
              <TouchableOpacity style={styles.button} onPress={this.sendRequestHandler}>
                    <Text style={styles.text}>SEND </Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
      
      )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        width:400
    },
    button:{
      marginTop:20,
      backgroundColor:'#c1292e',
      padding:10,
      borderRadius:50,
      width:200
    },
    text:{
        textAlign:'center',
        color:'white'
    },
    headerText:{
      textAlign:'center',
      marginVertical:20,
      fontSize:50
    }
})
export default SongRequest;