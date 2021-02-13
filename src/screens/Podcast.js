import React,{Component} from 'react';
import {View,StyleSheet,FlatList,TouchableOpacity,Linking,ScrollView} from 'react-native';
import {Image} from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title  } from 'native-base';

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
          sounds:'',
          playingStatus:"nosound"
        }
    }


    async componentDidMount(){
      const response = await fetch('https://wiggletunes.co.za/wp-json/wp/v2/podcast');
      const data = await response.json();
      this.setState({
        podcast:[...data]
      })

    }

    async _playRecording(e) {
      const {isPlaying}=this.state;
      const { sound } = await Audio.Sound.createAsync(
       {
          uri: e,
        },
        {
          shouldPlay: true,
          isLooping: false,
        }
      );
      this.sound = sound;
      this.setState({
        playingStatus: 'playing',
        isPlaying:!isPlaying,
        sounds:e
      });
    }


    async _pauseAndPlayRecording() {
      const {isPlaying}=this.state;
      if (this.sound != null) {
        if (this.state.playingStatus == 'playing') {
          console.log('pausing...');
          await this.sound.pauseAsync();
          console.log('paused!');
          this.setState({
            playingStatus: 'donepause',
            isPlaying:false
          });
        } else {
          console.log('playing...')
          await this.sound.playAsync();
        
         
          console.log('playing!');
          this.setState({
            playingStatus: 'playing',
            isPlaying:true
          });
        }
      }
    }

    _syncPauseAndPlayRecording() {
      if (this.sound != null) {
        if (this.state.playingStatus == 'playing') {
          this.sound.pauseAsync();
        } else {
          this.sound.playAsync();
        }
      }
    }

    _playAndPause = (e) => {
      switch (this.state.playingStatus) {
        case 'nosound':
          this._playRecording(e);
          break;
        case 'donepause':
        case 'playing':
          this._pauseAndPlayRecording();
          break;
      }
    }
   

    
   
    
    render(){
      const {podcast,isPlaying}=this.state;
      console.log(this.state.sounds)
        return(
          <ScrollView style={{backgroundColor:'#161616'}}>
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
                          <TouchableOpacity style={styles.control}  onPress={()=>Linking.openURL(item.meta.audio_file)}>
                             <Ionicons name='ios-play-circle' size={48} color='#444' />
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