import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {WebView} from 'react-native-webview';
import { 
    AdMobBanner, 
    AdMobInterstitial, 
    PublisherBanner,
    AdMobRewarded
  } from 'expo-ads-admob'

class Histrory extends React.Component{


async componentDidMount(){
    await setTestDeviceIDAsync('EMULATOR');
}

   render(){
    return(
     <View style={styles.container}>
        <AdMobBanner
          style={styles.banner}
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          didFailToReceiveAdWithError={this.bannerError} />
     </View>
    )
}
}

const styles=StyleSheet.create({
     container:{
        flex:1,
       justifyContent:'flex-end',
       alignItems:'flex-start'
    } ,
    banner:{
        width:150
    }
})

export default Histrory;