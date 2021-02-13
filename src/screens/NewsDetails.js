import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView} from 'react-native';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
class NewsDetail extends Component{


    render(){
    const {image,content } = this.props.route.params;
    return(
        <ScrollView style={{backgroundColor:'#161616'}}>
            <Image
              style={styles.image}
              source={{uri:image}}
            />
            <View style={styles.contentContainer}>
                <Text style={styles.content}>{content}</Text>
                <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-4848737122422413/6221324032" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
                onDidFailToReceiveAdWithError={this.bannerError} />
            </View>
    </ScrollView>
    )
}
}

const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:500
    },

    content:{
        marginTop:20,
       color:'white',
        lineHeight:20
    },
    contentContainer:{
        margin:20
    }
})



export default NewsDetail;