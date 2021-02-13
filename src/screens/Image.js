import React from 'react';
import {Image,View} from 'react-native';
import { FontAwesome5,FontAwesome } from '@expo/vector-icons'; 
const ImageComponent=()=>{
    return(
     <View>
         <FontAwesome5 name="instagram-square" size={24} color="black" />
         <FontAwesome name="facebook-square" size={24} color="black" />
         <FontAwesome5 name="whatsapp-square" size={24} color="black" />
         <FontAwesome name="twitter-square" size={24} color="black" />
         <FontAwesome name="youtube-square" size={24} color="black" />
     </View>
    )
}


export default ImageComponent;