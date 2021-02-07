import React from 'react';
import {View,Text,Image,StyleSheet,ScrollView} from 'react-native';

const NewsDetail=({ route})=>{

    const {image,content } = route.params;
    return(
        <ScrollView>
            <Image
              style={styles.image}
              source={{uri:image}}
            />
            <View>
                <Text>{content}</Text>
            </View>
            </ScrollView>
    )
}

const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:500
    },
    content:{
     marginTop:20
    }
})



export default NewsDetail;