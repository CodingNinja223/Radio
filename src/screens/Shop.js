import React,{Component} from 'react';
import {View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TouchableNativeFeedback,
  Platform} from 'react-native';
  import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
import Card from '../components/Card';
import { ScrollView } from 'react-native-gesture-handler';


class Shop extends Component{
constructor(){
    super();
    this.state={
     products:[]
    }
}


  componentDidMount(){
    fetch('https://wiggletunes.co.za/wp-json/wc/v3/products?per_page=100&consumer_key=ck_ece37194647bba8a1b56ff2ee6cf48fe94f9347a&consumer_secret=cs_ee597cf885be6ca309dc288e9b3c81b6536a9a9e')
    .then(res=>res.json())
    .then(data=>{
        this.setState({
            products:[...data]
        })
    })
  }

    render(){
        const {products}=this.state;
  
        return(
          <ScrollView style={{backgroundColor:'#161616'}}>
            <FlatList
             keyExtractor={item=>item.id.toString()}
             data={products}
             renderItem={({item})=>(
               <View style={styles.wrap}>
              <Card style={styles.product}>
               <View style={styles.touchable}>
                <TouchableOpacity  >
                  <View>
                    <View style={styles.imageContainer}>
                      <Image style={styles.image} source={{ uri: item.featured_image_urls.medium }} />
                    </View>
                    <View style={styles.details}>
                      <Text style={styles.title}>{item.name}</Text>
                      <Text style={styles.price}>R{item.price}</Text>
                    </View>
                    <View style={styles.actions}>
                       <Text onPress={()=>{
                         this.props.navigation.navigate('ProductDetail',{
                           productId:item.id,
                           productTitle:item.name,
                           productImage:item.featured_image_urls.medium,
                           productPrice:item.price,
                         
                         })
                       }}>View Detail</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </Card>
            </View>
             )}
            
            />
              <AdMobBanner
              style={{width:'100%'}}
              bannerSize="fullBanner"
              adUnitID="ca-app-pub-4848737122422413/6221324032" // Test ID, Replace with your-admob-unit-id
              servePersonalizedAds // true or false
              onDidFailToReceiveAdWithError={this.bannerError} />
      </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
  wrap:{
    flex:1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding:5,
    justifyContent:'center',
  },
  product: {
    height: 300,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '50%',
    height: '100%'
  },
  details: {
    alignItems: 'center',
    height: '17%',
    padding: 10
  },
  title: {
    fontSize: 18,
    marginVertical: 2
  },
  price: {
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20
  }
})
export default Shop;