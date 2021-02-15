import React from 'react'
import {View,Image,Linking} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons'; 


  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem label={()=>(<Image source={require('../img/icon.png')}/>)} style={{marginVertical:50}} />
        <DrawerItemList {...props} />
        <DrawerItem label={()=>(
        <View style={{flexDirection:'row'}}>
          <FontAwesome name="whatsapp" size={24} color="white" style={{margin:10}} onPress={()=>Linking.openURL('https://api.whatsapp.com/send?phone=2766%20057%206802&text=')}/>
          <FontAwesome name="facebook" size={24} color="white" style={{margin:10}} onPress={()=>Linking.openURL('https://www.facebook.com/wiggletunes/')} />
          <FontAwesome name="twitter" size={24} color="white" style={{margin:10}} onPress={()=>Linking.openURL('https://twitter.com/WiggleTunesSA')} />
          <FontAwesome name="youtube-play" size={24} color="white" style={{margin:10}} onPress={()=>Linking.openURL('https://www.youtube.com/channel/UCJBqTfRmBYwAQJ7k4UZud7A?view_as=subscriber')} />
          <FontAwesome name="instagram" size={24} color="white" style={{margin:10}} onPress={()=>Linking.openURL('https://www.instagram.com/wiggletunes_sa/?hl=en')}/>
        </View>)} style={{marginVertical:20}} />

      </DrawerContentScrollView>
    );
  }

  export default CustomDrawerContent;