import React,{useContext, useEffect} from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';


import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Exams from '../Screens/Exams';
import Instructions from '../Screens/Instructions';
import Feed from '../Screens/Feed';








const Tab = createMaterialBottomTabNavigator();

const TabBar = () => (
  
  
  <Tab.Navigator 
  screenOptions={{
    headerShowen:false,
    
    
    
  }}
  initialRouteName="Feed" activeColor="#FFD300" 
   >
  <Tab.Screen
    name="Feed"
    component={Feed}
    options={{
      tabBarLabel: 'Home',
      tabBarColor: '#1E5254',
      activeBackgroundColor:'#1E5254',
      tabBarIcon: ({color}) => (
        <Icon name="ios-home" color={color} size={26} />
      ),
      
    }}
  />
  <Tab.Screen
    name="Exams"
    headerShowen={false}
    component={Exams}
    options={{
      
      tabBarLabel: 'Text',
      activeBackgroundColor:'#1E5254',
      tabBarColor: '#1E5254',
      tabBarIcon: ({color}) => (
        <Icon name="ios-text" color={color} size={26} />
      ),
      
    }}
  />
  <Tab.Screen
    name="Instuctions"
    component={Instructions}
    options={{
      tabBarLabel: 'Notification',
      tabBarColor: '#1E5254',
      activeBackgroundColor:'#1E5254',
      tabBarIcon: ({color}) => (
        <Icon name="ios-notifications" color={color} size={26} />
      ),
    }}
  />
 
  <Tab.Screen
    name="Exams"
    component={Exams}
    options={{
      tabBarLabel: 'Profile',
      tabBarColor: '#1E5254',
      activeBackgroundColor:'#1E5254',
      tabBarIcon: ({color}) => (
        <Icon name="ios-person" color={color} size={26} />
      ),
    }}
  />
  
</Tab.Navigator>

);

export default TabBar;








// Bottom tab

