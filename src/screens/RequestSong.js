import React from 'react'
import {WebView} from 'react-native-webview';

const RequestSong=()=>{

    return(
<WebView
        source={{
        uri: 'https://www.wiggletunes.co.za/song-history.html'
        }}
       
     />
    )
}

export default RequestSong;