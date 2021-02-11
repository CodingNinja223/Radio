import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image} from 'react-native';




const ProductDetail =({route})=>{
  const {productTitle,productImage,productPrice}=route.params;
  return(
    <ScrollView>
        <Image source={{uri:productImage}} style={styles.image}/>
        <View>
           <Text style={styles.center}>R{productPrice}</Text>
           <Text style={styles.center}>{productTitle}</Text>
        </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  image:{
    width:'100%',
    height:500,
    resizeMode:'cover'
  },
  center:{
    textAlign:'center'
  }
})

export default ProductDetail;