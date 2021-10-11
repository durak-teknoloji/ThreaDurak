import React from 'react';
import { View } from 'react-native';

const SeparatorH = (props) => {
    return (
        <View width={props.Width} style={{ height: '100%', backgroundColor: 'white' }}></View>
    );
};

export default SeparatorH;