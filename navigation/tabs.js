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
                name="Liste" 
                component={TableScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('../assets/Icons/icons8_view_details_48px.png')}
                            resizeMode="contain"
                            style={{width: 28, height:28, tintColor: focused ? '#4A5BB9' : '#BEC6CD',}}
                            ></Image>
                            {/* <Text style={{fontSize:12, color: focused ? '#4A5BB9' : '#BEC6CD'}}>TABLO</Text> */}
                        </View>
                    ), tabBarLabelStyle: {fontSize:14}, tabBarLabel:"LİSTE"
                }}
            ></Tab.Screen>
            <Tab.Screen 
                name="Çevrim" 
                component={ConverterScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('../assets/Icons/icons8_calculator_48px.png')}
                            resizeMode="contain"
                            style={{width: 28, height:28, tintColor: focused ? '#4A5BB9' : '#BEC6CD',}}
                            ></Image>
                        </View>
                    ), tabBarLabelStyle: {fontSize:14}, tabBarLabel:"ÇEVRİM",
                    //  tabBarShowLabel:false
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
}

export default Tabs;