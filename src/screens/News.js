import React,{Component} from 'react';
import {FlatList,TouchableOpacity,ScrollView,Image} from 'react-native';
import {ListItem,Avatar} from 'react-native-elements';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';
import { Container, Content, Card, CardItem, Left,Right, Body,Text,ProgressiveImage ,Thumbnail,Spinner, Icon } from 'native-base';

class News extends Component{
    constructor(){
        super();
        this.state={
          posts:[]
        }
    }



    componentDidMount(){
    fetch('https://www.wiggletunes.co.za/wp-json/wp/v2/posts?_embed')
    .then(res=>res.json())
    .then(data=>{
        this.setState({
            posts:[...data]
        })
    })
  
   }

    render(){
      const {posts}=this.state;
        console.log(posts);
        return(
          <ScrollView style={{backgroundColor:'#161616'}}>
          <FlatList
            keyExtractor={item=> item.id.toString()}
            data={posts}
             renderItem={({item})=>(
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Detail',{
                    itemId:item.id,
                    image:item.featured_image_urls.medium,
                    content:item.content.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, ''),
                    headerTitle:item.title.rendered
                })
            }}>   
               <Card>
                    <CardItem>
                      <Left style={{flex:0.8}}>
                        <Body>
                          <Text note style={{fontWeight:'bold',fontSize:17}}>{item.title.rendered}</Text>
                        </Body>
                      </Left>
                      <Right style={{flex:0.2}}>
                        <Icon name="ios-heart"/>
                      </Right>
                    </CardItem>
                    <CardItem cardBody>
                      <Image source={{ uri:item.featured_image_urls.medium }}style={{ width:'100%', height: 170,resizeMode:'cover' }}  />
                    </CardItem>
                    <CardItem content>
                     <Text note>{item.excerpt.rendered}</Text>
                    </CardItem>
                  </Card>
             </TouchableOpacity>  
             )}
          />
            <AdMobBanner
              bannerSize="fullBanner"
              adUnitID="ca-app-pub-4848737122422413/6221324032" // Test ID, Replace with your-admob-unit-id
              servePersonalizedAds // true or false
              onDidFailToReceiveAdWithError={this.bannerError} />
          </ScrollView>
        )
    }
}



export default News;

{/* <TouchableOpacity onPress={()=>{
  this.props.navigation.navigate('Detail',{
      itemId:item.id,
      image:item.featured_image_urls.medium,
      content:item.content.rendered.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, ''),
      headerTitle:item.title.rendered
  })
}}>   
 <ListItem key={item.id}  bottomDivider>
  <Avatar source={{uri: item.featured_image_urls.medium}} />
  <ListItem.Content>
  <ListItem.Title>{item.title.rendered}</ListItem.Title>
  <ListItem.Subtitle>{item.excerpt.rendered}</ListItem.Subtitle>
  </ListItem.Content>
</ListItem>
</TouchableOpacity> */}