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
                name="Ürün Listesi" 
                component={TableScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('../assets/Icons/aicons8_clipboard_list_48px.png')}
                            resizeMode="contain"
                            style={{width: 36, height:36, tintColor: focused ? '#4A5AB9' : '#BEC6CD',}}
                            ></Image>
                        </View>
                    ), tabBarLabelStyle: {fontSize:16}, 
                    tabBarLabel:"Ürünler",
                    tabBarLabelPosition:'beside-icon',
                    tabBarActiveTintColor:'#4A5AB9', 
                    tabBarHideOnKeyboard:true,
                    headerTintColor:'#4A5AB9'
                }}
            ></Tab.Screen>
            <Tab.Screen 
                name="İplik Çevrim" 
                component={ConverterScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('../assets/Icons/aicons8_calculator_48px.png')}
                            resizeMode="contain"
                            style={{width: 36, height:36, tintColor: focused ? '#4A5BB9' : '#BEC6CD',}}
                            ></Image>
                        </View>
                    ), tabBarLabelStyle: {fontSize:16}, 
                    tabBarLabel:"Çevrim", 
                    tabBarLabelPosition:'beside-icon',
                    tabBarActiveTintColor:'#4A5AB9', 
                    tabBarHideOnKeyboard:true, 
                    headerTintColor:'#4A5AB9'
                    //  tabBarShowLabel:false
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
}

export default Tabs;