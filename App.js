import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image} from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Radio from './src/screens/Radio';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Container, Text } from 'native-base';
import Watch from './src/screens/Watch';
import Podcast from './src/screens/Podcast'; 
import Review from './src/screens/Review';
import Shop from './src/screens/Shop';
import News from './src/screens/News';
import NewsDeatil from './src/screens/NewsDetails';
import SongRequest from './src/screens/Songrequest';
import { Ionicons } from '@expo/vector-icons'; 


const Stack=createStackNavigator();


const PrimaryNavigation=({navigation})=>{
return(
   <Stack.Navigator initialRouteName="listen live">
       <Stack.Screen name="listen live" component={Radio}
        options={{
            
            headerLeft:()=>(
                <Ionicons name="menu" size={24} color="black" onPress={()=>navigation.openDrawer()}/>
            )
        }}
       />
	   <Stack.Screen name="Detail" component={NewsDeatil} />
        <Stack.Screen name="Watch" component={Watch}  options={{ title: 'Watch' }}/>
        <Stack.Screen name="Podcast" component={Podcast} options={{ title: 'Watch' }}/>
   </Stack.Navigator>
 )
}

const Tab=createBottomTabNavigator();

const TabNavigation=()=>{
    return(
        <Tab.Navigator 
        initialRouteName="listen live"
         screenOptions={({route})=>({
             tabBarIcon:({focused,color,size})=>{
                 let iconName;

                 if(route.name === 'listen live'){
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
             <Tab.Screen name="listen live" component={PrimaryNavigation}/>
             <Tab.Screen name="Watch" component={Watch}/>
             <Tab.Screen name="Podcast" component={Podcast}/>
        </Tab.Navigator>
    )
}

const Drawer =createDrawerNavigator();

class App extends React.Component {
    constructor(){
        super();
        this.state={
          isReady:false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        this.setState({ isReady: true });
      }

	render(){
        if(!this.state.isReady){
            return <AppLoading/>
        }
	return(
		<NavigationContainer>
           <Drawer.Navigator initialRouteName="listen live">
               <Drawer.Screen name="listen live" component={TabNavigation}/>
               <Drawer.Screen name="Review" component={Review}/>
               <Drawer.Screen name="Shop" component={Shop}/>
               <Drawer.Screen name="News" component={News}/>
               <Drawer.Screen name="SongRequest" component={SongRequest}/>
           </Drawer.Navigator>
        </NavigationContainer>
	)
}
}

export default App;