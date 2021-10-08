import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const RoundButton = (props) => {
    return (
        <View style={styles.roundButtonContainer}>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.roundButton}>
                <Image style={{ tintColor: '#4A5AB9' }} source={require('../assets/Icons/icons8_info_30px.png')}></Image>
                {/* <Text style={styles.infoText}>bilgi</Text> */}
            </TouchableOpacity>
        </View>
    );
};

export default RoundButton;

const styles = StyleSheet.create({
    roundButtonContainer: {
        right: 0, 
        bottom: 0, 
        position: 'absolute'
    },
    roundButton: {
        position: 'relative',
        width: 60,
        height: 60,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 100,
        backgroundColor: '#EED550'
    },
    infoText: {
        // fontWeight:'bold',
        fontStyle: 'italic',
        fontSize: 14
    }
});