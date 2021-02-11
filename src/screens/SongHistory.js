import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {WebView} from 'react-native-webview';

import { 
    AdMobBanner, 
    AdMobInterstitial, 
    PublisherBanner,
    AdMobRewarded
  } from 'expo-ads-admob'

const Histrory =()=>{


    const myScript = `
    (function () {
        const li=document.getElementsByTagName("li").style.listStyle="none";
    })();
    `;
    return(
      <WebView
      source={{
      uri: 'https://www.wiggletunes.co.za/song-history.html'
      }}
      injectedJavaScript={myScript}
   />
    )

}



export default Histrory;


{/* <View style={styles.container}>
        <AdMobBanner
          style={{width:'100%'}}
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          didFailToReceiveAdWithError={this.bannerError} />
     </View> */}