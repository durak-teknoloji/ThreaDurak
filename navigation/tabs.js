import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ConverterScreen from '../screens/ConverterScreen'
import TableScreen from '../screens/TableScreen'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator options={{}} style={{}}>
            <Tab.Screen 
                name="Ürünler" 
                component={TableScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('../assets/Icons/aicons8_clipboard_list_48px.png')}
                            resizeMode="contain"
                            style={{width: 30, height:30, tintColor: focused ? '#4A5BB9' : '#BEC6CD',}}
                            ></Image>
                            {/* <Text style={{fontSize:12, color: focused ? '#4A5BB9' : '#BEC6CD'}}>TABLO</Text> */}
                        </View>
                    ), tabBarLabelStyle: {fontSize:14}, tabBarLabel:"Ürünler"
                }}
            ></Tab.Screen>
            <Tab.Screen 
                name="Çevrim" 
                component={ConverterScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('../assets/Icons/aicons8_calculator_48px.png')}
                            resizeMode="contain"
                            style={{width: 30, height:30, tintColor: focused ? '#4A5BB9' : '#BEC6CD',}}
                            ></Image>
                        </View>
                    ), tabBarLabelStyle: {fontSize:14}, tabBarLabel:"Çevrim",
                    //  tabBarShowLabel:false
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
}

export default Tabs;