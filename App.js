import React,{Component} from 'react'
import { StyleSheet, TouchableOpacity, View, Image} from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Radio from './src/screens/Radio';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Watch from './src/screens/Watch';
import Podcast from './src/screens/Podcast'; 
import Review from './src/screens/Review';
import Shop from './src/screens/Shop';
import News from './src/screens/News';
import NewsDeatil from './src/screens/NewsDetails';
import SongRequest from './src/screens/Songrequest';
import { Ionicons, Entypo  } from '@expo/vector-icons'; 
import OneSignal from 'react-native-onesignal'
import RadioTabs from './src/screens/RadioTab';
import Cart from './src/screens/Cart';



const Stack=createStackNavigator();


const PrimaryNavigation=({navigation})=>{
return(
   <Stack.Navigator initialRouteName="Now Playing">
       <Stack.Screen name="Now Playing" component={RadioTabs}
        options={{
            
            headerLeft:()=>(
                <Ionicons name="menu" size={24} color="black" onPress={()=>navigation.openDrawer()}/>
            )
        }}
       />
        <Stack.Screen name="Watch" component={Watch}  options={{ title: 'Watch' }}/>
        <Stack.Screen name="Podcast" component={Podcast} options={{ title: 'Watch' }}/>
   </Stack.Navigator>
 )
}

const NewsNavigator=({navigation})=>{
    return(
        <Stack.Navigator initialRouteName="News">
            <Stack.Screen name="News" component={News}  
                 options={{
            
                    headerLeft:()=>(
                        <Ionicons name="menu" size={24} color="black" onPress={()=>navigation.openDrawer()}/>
                    )
                }}
            />
            <Stack.Screen name="Detail" component={NewsDeatil} />
        </Stack.Navigator>
    )
}


const WatchNavigator=({navigation})=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Watch" component={Watch}
               options={{
            
                headerLeft:()=>(
                    <Ionicons name="menu" size={24} color="black" onPress={()=>navigation.openDrawer()}/>
                )
            }}
            />
        </Stack.Navigator>
    )
}

const PodcastNavigator=({navigation})=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Podcast" component={Podcast}
              options={{
            
                headerLeft:()=>(
                    <Ionicons name="menu" size={24} color="black" onPress={()=>navigation.openDrawer()}/>
                )
            }}
            />
        </Stack.Navigator>
    )
}
const Tab=createBottomTabNavigator();

const TabNavigation=()=>{
    return(
        <Tab.Navigator 
        initialRouteName="Now Playing"
         screenOptions={({route})=>({
             tabBarIcon:({focused,color,size})=>{
                 let iconName;

                 if(route.name === 'Now Playing'){
                     iconName= focused 
                     ? 'play-circle'
                     :'play-circle-outline'
                 }else if(route.name === 'Watch'){
                    iconName=focused
                    ? 'tv'
                    : 'tv-outline'
                 }else if(route.name === 'Podcast'){
                    iconName=focused
                    ? 'radio-sharp'
                    : 'radio-outline'
                 }

                 return <Ionicons name={iconName} size={24} color="black" /> 
             }
         })}
        >
             <Tab.Screen name="Now Playing" component={PrimaryNavigation}/>
             <Tab.Screen name="Watch" component={WatchNavigator}/>
             <Tab.Screen name="Podcast" component={PodcastNavigator}/>
        </Tab.Navigator>
    )
}

const ShopNavigator=({navigation})=>{
    return(
       <Stack.Navigator>
           <Stack.Screen name="Shop" component={Shop}  
              options={{
            
                headerLeft:()=>(
                    <Ionicons name="menu" size={24} color="black" onPress={()=>navigation.openDrawer()}/>
                )
            }}
           />
       </Stack.Navigator>
    )
}

const ShopTabNavigation=()=>{
    return(
        <Tab.Navigator 
        initialRouteName="Shop"
         screenOptions={({route})=>({
             tabBarIcon:({focused,color,size})=>{
                 let iconName;

                 if(route.name === 'Shop'){
                     iconName= focused 
                     ? 'shopping-bag'
                     :'shopping-bag'
                 }else if(route.name === 'Cart'){
                    iconName=focused
                    ? 'shopping-cart'
                    : 'shopping-cart'
                 }

                 return <Entypo name={iconName} size={24} color="black" /> 
             }
         })}
        >
             <Tab.Screen name="Shop" component={ShopNavigator}/>
             <Tab.Screen name="Cart" component={Cart}/>
        </Tab.Navigator>
    )
}
const RequestNavigation=({navigation})=>{
    return(
      <Stack.Navigator>
          <Stack.Screen name="Request Song" component={SongRequest}  
            options={{
            
                headerLeft:()=>(
                    <Ionicons name="menu" size={24} color="black" onPress={()=>navigation.openDrawer()}/>
                )
            }}
          />
      </Stack.Navigator>
    )
}


const ReviewNavigation=({navigation})=>{
    return(
      <Stack.Navigator>
          <Stack.Screen name="Review" component={Review}  
            options={{
            
                headerLeft:()=>(
                    <Ionicons name="menu" size={24} color="black" onPress={()=>navigation.openDrawer()}/>
                )
            }}
          />
      </Stack.Navigator>
    )
}
const Drawer =createDrawerNavigator();

class App extends Component {
    constructor(){
        super();
        this.state={
          isReady:false,
          isSubscribed:false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        this.setState({ isReady: true });

         /* O N E S I G N A L   S E T U P */
        //  OneSignal.setAppId("590075df-aaa1-4966-a1f8-25ba8bdcbc6b");
        //  OneSignal.setLogLevel(6, 0);
        //  OneSignal.setRequiresUserPrivacyConsent(false);
        //  OneSignal.promptForPushNotificationsWithUserResponse(response => {
        //      this.OSLog("Prompt response:", response);
        //  });

        //  /* O N E S I G N A L  H A N D L E R S */
        // OneSignal.setNotificationWillShowInForegroundHandler(notifReceivedEvent => {
        //     this.OSLog("OneSignal: notification will show in foreground:", notifReceivedEvent);
        //     let notif = notifReceivedEvent.getNotification();

        //     const button1 = {
        //         text: "Cancel",
        //         onPress: () => { notifReceivedEvent.complete(); },
        //         style: "cancel"
        //     };

        //     const button2 = { text: "Complete", onPress: () => { notifReceivedEvent.complete(notif); }};

        //     Alert.alert("Complete notification?", "Test", [ button1, button2], { cancelable: true });
        // });
        // OneSignal.setNotificationOpenedHandler(notification => {
        //     this.OSLog("OneSignal: notification opened:", notification);
        // });
        // OneSignal.setInAppMessageClickHandler(event => {
        //     this.OSLog("OneSignal IAM clicked:", event);
        // });
        // OneSignal.addEmailSubscriptionObserver((event) => {
        //     this.OSLog("OneSignal: email subscription changed: ", event);
        // });
        // OneSignal.addSubscriptionObserver(event => {
        //     this.OSLog("OneSignal: subscription changed:", event);
        //     this.setState({ isSubscribed: event.to.isSubscribed})
        // });
        // OneSignal.addPermissionObserver(event => {
        //     this.OSLog("OneSignal: permission changed:", event);
        // });
  
        // const deviceState = await OneSignal.getDeviceState();

        // this.setState({
        //     isSubscribed : deviceState.isSubscribed
        // });
      }

	render(){
        if(!this.state.isReady){
            return <AppLoading/>
        }
	return(
		<NavigationContainer>
           <Drawer.Navigator initialRouteName="Now Playing">
               <Drawer.Screen name="Now Playing" component={TabNavigation}/>
               <Drawer.Screen name="Shop" component={ShopTabNavigation}/>
               <Drawer.Screen name="News" component={NewsNavigator}/>
               <Drawer.Screen name="Song Request" component={RequestNavigation}/>
               <Drawer.Screen name="Review" component={ReviewNavigation}/>
           </Drawer.Navigator>
        </NavigationContainer>
	)
}
}

export default App;