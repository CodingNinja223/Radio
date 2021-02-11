import React,{Component} from 'react';
import {View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {ListItem,Avatar} from 'react-native-elements';
import { Header } from 'react-native-elements';

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
               <ListItem key={item.id}  bottomDivider>
                <Avatar source={{uri: item.featured_image_urls.medium}} />
                <ListItem.Content>
                <ListItem.Title>{item.title.rendered}</ListItem.Title>
                <ListItem.Subtitle>{item.excerpt.rendered}</ListItem.Subtitle>
                </ListItem.Content>
             </ListItem>
             </TouchableOpacity>  
             )}
          />
        )
    }
}

const styles=StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    }
})


export default News;