import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from "./screen/Homescreen";
import Detailscreen from "./screen/Detailscreen";
import Profilescreen from "./screen/Profilescreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator();


export default function App() {

    return (
     
        <NavigationContainer>
          {/* <Stack.Navigator>
            <Stack.Screen name="Home" component={Homescreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Detail" component={Detailscreen} options={{ headerShown: false }}/>
          </Stack.Navigator> */}
                <Tab.Navigator
                  initialRouteName="Home"
                  screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                  }}
                >
                  <Tab.Screen
                    
                    name="Home"
                    component={Homescreen}
                    options={{
                      headerShown: false,
                      tabBarLabel: 'Home',
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="Detail"
                    component={Detailscreen}
                    options={{
                      tabBarButton: () => null,
                      tabBarVisible: false,
                      headerShown: false,
                    }}
                  /> 
                  <Tab.Screen
                    name="Profile"
                    component={Profilescreen}
                    options={{
                      headerShown: false,
                      tabBarLabel: 'Profile',
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                      ),
                    }}
                  />
                </Tab.Navigator> 
        </NavigationContainer>
       
      
    );
  
}








 
      
  

