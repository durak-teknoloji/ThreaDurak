import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const RoundButton = (props, state) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.roundButton1}>
            <Image style={{ tintColor: '#4A5AB9' }} source={require('../assets/Icons/icons8_info_30px.png')}></Image>
            {/* <Text style={styles.infoText}>bilgi</Text> */}
        </TouchableOpacity>
    );
};

export default RoundButton;

const styles = StyleSheet.create({
    screen: {
    },
    roundButton1: {
        position: 'relative',
        width: 60,
        height: 60,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 15,
        borderRadius: 100,
        backgroundColor: '#FFA500'
    },
    infoText: {
        // fontWeight:'bold',
        fontStyle: 'italic',
        fontSize: 14,
        fontFamily: ''
    }
});