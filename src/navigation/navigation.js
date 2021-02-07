import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Radio from '../screens/Radio';
import Watch from '../screens/Watch';
import Podcast from '../screens/Podcast'; 
import Review from '../screens/Review';
import Shop from '../screens/Shop';
import News from '../screens/News';
import NewsDeatil from '../screens/NewsDetails';
import SongRequest from '../screens/Songrequest';

const Stack=createStackNavigator();


const PrimaryNavigation=()=>{
return(
   <Stack.Navigator initialRouteName="listen live">
       <Stack.Screen name="listen live" component={Radio}/>
   </Stack.Navigator>
 )
}

const Tab=createBottomTabNavigator();

const TabNavigation=()=>{
    return(
        <Tab.Navigator initialRouteName="listen live">
             <Tab.Screen name="listen live" component={PrimaryNavigation}/>
             <Tab.Screen name="Watch" component={Watch}/>
             <Tab.Screen name="Podcast" component={Podcast}/>
        </Tab.Navigator>
    )
}


const Drawer =createDrawerNavigator();

export default MainNavigation =()=>{
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