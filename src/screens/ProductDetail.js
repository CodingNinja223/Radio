import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,Image,TouchableOpacity,Linking} from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';



class ProductDetail extends Component{

  render(){
  const {productTitle,productImage,productPrice, productId}=this.props.route.params;
  return(
    <ScrollView style={{backgroundColor:'#161616'}}>
        <Image source={{uri:productImage}} style={styles.image}/>
        <View style={styles.item}>
            <Text style={styles.center}>{productTitle}</Text>
           <Text style={styles.price}>R{productPrice}</Text>
        </View>
        <View style={{marginVertical:15}}>
             <TouchableOpacity style={styles.button} onPress={()=>Linking.openURL(`https://www.wiggletunes.co.za/?add-to-cart=${productId}`)}>
                  <Text style={{color:'black',textAlign:'center'}}>Buy Now</Text>
             </TouchableOpacity>
        </View>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-4848737122422413/6221324032" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={this.bannerError} /> 
    </ScrollView>
  )
}
}

const styles=StyleSheet.create({
  image:{
    width:'100%',
    height:500,
    resizeMode:'cover'
  },
  center:{
    textAlign:'left',
    margin:15,
    color:'white',
    fontSize:28
  },
  items:{
    margin:30
  },
  price:{
    textAlign:'left',
    margin:15,
    color:'white',
    fontSize:25
  },
  button:{
    backgroundColor:'white',
    borderRadius:4,
    width:'50%',
    padding:15,
    marginLeft:180
  }
})

export default ProductDetail;