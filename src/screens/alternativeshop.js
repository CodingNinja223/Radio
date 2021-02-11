import React from 'react';
import {WebView,StyleSheet} from 'react-native-webview';
const AlternativeShop =()=>{


    const myScript = `
    (function () {
        const footer=document.querySelector("#footer").style.display="none";
        const header=document.querySelector(".mobile-header-bar").style.display="none";
        const top=document.querySelector(".top-bar-bg").style.display="none";
    })();
    `;
    return(
        <WebView
            source={{
            uri: 'https://www.wiggletunes.co.za/shop/'
            }}
            injectedJavaScript={myScript}
            javaScriptEnabled={true}
         />
    )
}



export default AlternativeShop