import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { globalStyles } from '../style/globalStyle'

export default function Item({item, pressHandler}){
    return(
        <TouchableOpacity onPress = {() => (pressHandler(item.key))}>
            <Text style={globalStyles.touchableItem}>{item.name}</Text>
        </TouchableOpacity>
    )
}
