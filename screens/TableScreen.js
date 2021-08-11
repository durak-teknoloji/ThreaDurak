import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import ThreadTable from '../components/ThreadTable';

const TableScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <ThreadTable></ThreadTable>
        </View>
    )
};

export default TableScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D7DFE6'
    },
});