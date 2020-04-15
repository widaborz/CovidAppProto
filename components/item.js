import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../style/globalStyle'

export default function Item({item, pressHandler}){
    return(
        <TouchableOpacity style={globalStyles.touchableItem} onPress = {() => (pressHandler(item.key))}>
             <MaterialIcons name = "add" size = {20} style = {styles.icon}/><Text >{item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon: {
        paddingRight: 5, 
        paddingLeft: 5
    }
})