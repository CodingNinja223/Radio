import React,{Component} from 'react';
import {View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
class Podcast extends Component{
    constructor(){
        super();
        this.state={
          podcast:[],
          isPlaying: false,
          playbackInstance: null,
          currentIndex: 0,
          volume: 1.0,
          isBuffering: true,
        }
    }


  async componentDidMount(){
      const response = await fetch('https://wiggletunes.co.za/wp-json/wp/v2/podcast');
      const data = await response.json();
      this.setState({
        podcast:[...data]
      })

      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
          shouldDuckAndroid: true,
          staysActiveInBackground: true,
          playThroughEarpieceAndroid: true
        })
  
        this.loadAudio()
      } catch (e) {
        console.log(e)
      }
    }

    async loadAudio(e) {
      const { currentIndex, isPlaying, volume ,podcast} = this.state
       
      try {
        const playbackInstance = new Audio.Sound()
        const source = {
          uri:e
        }
  
        const status = {
          shouldPlay: isPlaying,
          volume: volume
        }
  
        playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
        await playbackInstance.loadAsync(source, status, false)
        this.setState({
          playbackInstance
        })
      } catch (e) {
        console.log(e)
      }
    }
  
    onPlaybackStatusUpdate = status => {
      this.setState({
        isBuffering: status.isBuffering
      })
    }
  
    handlePlayPause = async (e) => {
      this.loadAudio(e)

      const { isPlaying, playbackInstance } = this.state
      try{
      isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()
      }catch(e){
        console.log(e)
      }
      this.setState({
        isPlaying: !isPlaying
      })
      
     
    }
   
    
    render(){
      const {playbackInstance ,podcast}=this.state;
      console.log(playbackInstance);
        return(
          <View>
          <View>
             <FlatList
              keyExtractor={item=> item.id.toString()}
              data={podcast}
              renderItem={({item})=>(
                <Content  key={item.id}>
                  <Card>
                    <CardItem>
                      <Left>
                        <Thumbnail source={{uri:item.episode_player_image }} />
                        <Body>
                          <Text>{item.title.rendered}</Text>
                          <Text note>{item.type}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image source={{uri:item.episode_featured_image}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                      <Left>
                      <View style={styles.controls} >
                          <TouchableOpacity style={styles.control} onPress={async ()=>this.handlePlayPause(item.meta.audio_file)}>
                            {this.state.isPlaying ? (
                              <Ionicons name='ios-pause' size={48} color='#444' />
                            ) : (
                              <Ionicons name='ios-play-circle' size={48} color='#444' />
                            )}
                          </TouchableOpacity>
                        </View>
                        <Button transparent>
                          <Text>{moment(item.date).format('YYYY-MM-DD')}</Text>
                          </Button>
                          <Button transparent>
                            <Text>{item.meta.duration}</Text>
                          </Button>
                      </Left>
                      <Body>
                       
                      </Body>
                    </CardItem>
                  </Card>
                </Content>
              )}
              />
          </View>
          </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    },
    controls: {
      flexDirection: 'row'
    }
})


export default Podcast;