import React,{Component} from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text,ImageBackground,Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av';
import {WebView} from 'react-native-webview';
import {
	AdMobBanner,
	AdMobInterstitial,
	PublisherBanner,
	AdMobRewarded,
	setTestDeviceIDAsync,
  } from 'expo-ads-admob';


const audioBookPlaylist = [
	{
		title: 'Hamlet - Act I',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:
			'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act II',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:
			'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act III',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri: 'http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act IV',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:
			'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act4_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act V',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:
			'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	}
]

export default class Radio extends Component {
	state = {
		isPlaying: false,
		playbackInstance: null,
		currentIndex: 0,
		volume: 1.0,
		isBuffering: true
	}

	async componentDidMount() {
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

	async loadAudio() {
		const { currentIndex, isPlaying, volume } = this.state

		try {
			const playbackInstance = new Audio.Sound()
			const source = {
				uri: 'https://s3.radio.co/s353f67c4a/listen'
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
			isBuffering: status.isBuffering,
		})
	}

	handlePlayPause = async () => {
		const { isPlaying, playbackInstance } = this.state
		isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()
		this.setState({
			isPlaying: !isPlaying
		})
	}

	handlePreviousTrack = async () => {
		let { playbackInstance, currentIndex } = this.state
		if (playbackInstance) {
			await playbackInstance.unloadAsync()
			currentIndex < audioBookPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 0)
			this.setState({
				currentIndex
			})
			this.loadAudio()
		}
	}

	handleNextTrack = async () => {
		let { playbackInstance, currentIndex } = this.state
		if (playbackInstance) {
			await playbackInstance.unloadAsync()
			currentIndex < audioBookPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0)
			this.setState({
				currentIndex
			})
			this.loadAudio()
		}
	}

	renderFileInfo() {
		const { playbackInstance, currentIndex } = this.state
		return playbackInstance ? (
			<View style={styles.trackInfo}>
				<Text style={[styles.trackInfoText, styles.largeText]}>
					{audioBookPlaylist[currentIndex].title}
				</Text>
				<Text style={[styles.trackInfoText, styles.smallText]}>
					{audioBookPlaylist[currentIndex].author}
				</Text>
				<Text style={[styles.trackInfoText, styles.smallText]}>
					{audioBookPlaylist[currentIndex].source}
				</Text>
			</View>
		) : null
	}

	render() {
		const myScript = `
    (function () {
		const body=document.body.style.backgroundColor="#161616";
        const next=document.querySelector(".radioco_song").style.fontSize="35px";
		const next1=document.querySelector(".radioco_song").style.paddingTop="20px";
		const next2=document.querySelector(".radioco_song").style.lineHeight="1.5em";
		const next3=document.querySelector(".radioco_song").style.color="white";
		const previous=document.querySelector(".radioco_next").style.fontSize="30px";
		const previous1=document.querySelector(".radioco_next").style.paddingTop="20px";
		const previous2=document.querySelector(".radioco_next").style.color="white";
    })();
    `;
		return (
			<View style={styles.container}>
		       <View style={{height:'150%',padding:30}}>
				 <WebView
					source={{
					uri: 'https://www.wiggletunes.co.za/Current-Song.html'
					}}
					injectedJavaScript={myScript}
                    javaScriptEnabled={true}
			 		style={{width: Dimensions.get('window').width,height:800,resizeMode:'cover',marginVertical:250}}
				/>
			  </View>
				<View style={styles.controls}>
					{/* <TouchableOpacity style={styles.control} onPress={this.handlePreviousTrack}>
						<Ionicons name='ios-skip-backward' size={48} color='#444' />
					</TouchableOpacity> */}
					<TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
						{this.state.isPlaying ? (
							<Ionicons name='ios-pause' size={150} color='white' />
						) : (
							<Ionicons name='ios-play-circle' size={150} color='white' />
						)}
					</TouchableOpacity>
					{/* <TouchableOpacity style={styles.control} onPress={this.handleNextTrack}>
						<Ionicons name='ios-skip-forward' size={48} color='#444' />
					</TouchableOpacity> */}
				</View>
				<AdMobBanner
				style={styles.admob}
				bannerSize="fullBanner"
				adUnitID="ca-app-pub-4848737122422413/6221324032" // Test ID, Replace with your-admob-unit-id
				servePersonalizedAds // true or false
				onDidFailToReceiveAdWithError={this.bannerError} />
			</View >
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#161616',
		alignItems: 'center',
		justifyContent: 'center'
	},
	albumCover: {
		width: 250,
		height: 250
	},
	trackInfo: {
		padding: 40,
		backgroundColor: '#fff'
	},

	trackInfoText: {
		textAlign: 'center',
		flexWrap: 'wrap',
		color: '#550088'
	},
	largeText: {
		fontSize: 22
	},
	smallText: {
		fontSize: 16
	},
	control: {
		margin: 20
	},
	controls: {
		position:'absolute',
		top:'65%',
		flexDirection: 'row'
	},
	admob:{
		position:'absolute',
		top:'90%',
	}
})
