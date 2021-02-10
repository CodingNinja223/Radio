import React,{Component} from 'react';
import {View,StyleSheet,FlatList,Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,Title } from 'native-base';
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';



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
          <View>
             <Header style={{backgroundColor:'white'}}>
              <Left/>
              <Body>
                <Title style={{color:'black'}}>Shop</Title>
              </Body>
              <Right />
            </Header>
            <FlatList
             keyExtractor={item=>item.id.toString()}
             data={products}
             renderItem={({item})=>(
                <Content key={item.id}>
                <Card style={{flex: 2}}>
                  <CardItem>
                    <Left>
                       <Thumbnail source={{uri: item.featured_image_urls.medium}} /> 
                      <Body>
                        <Text>{item.name}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body style={styles.card}>
                       <Image source={{uri:item.featured_image_urls.medium}} style={{height: 200, width: 250, flex: 1}}/> 
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text>R{item.price}</Text>
                      </Button>
                    </Left>
                    <Right transparent >
                       <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('Cart',{
                                image:item.featured_image_urls.medium,
                                price:item.price,
                                id:item.id
                            })
                        }}>
                         <FontAwesome name="cart-plus" size={24} color='blue' />
                      </TouchableOpacity>
                    </Right>
                  </CardItem>
                </Card>
              </Content>
             )}
            
            />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    card:{
        justifyContent:'center'
    }
    
})
export default Shop;