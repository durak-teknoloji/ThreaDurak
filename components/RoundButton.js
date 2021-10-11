import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, useColorScheme } from 'react-native';

const RoundButton = (props) => {
    const scheme = useColorScheme();
    return (
        <View style={styles.roundButtonContainer}>
            <TouchableOpacity
                onPress={props.onPress}
                style={scheme === 'dark' ? styles.roundButtonDark : styles.roundButton}>
                <Image style={scheme === 'dark' ? { tintColor: '#344E5D' } : { tintColor: '#4A5AB9' }} source={require('../assets/Icons/icons8_info_30px.png')}></Image>
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
        backgroundColor: '#F1EE6F'
    },
    roundButtonDark: {
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
        backgroundColor: '#49A0AE'
    },
});