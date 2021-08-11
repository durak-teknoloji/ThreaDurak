import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Converter from '../components/Converter';

const ConverterScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Converter></Converter>
        </View>
    )
};

export default ConverterScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D7DFE6'
    },
});