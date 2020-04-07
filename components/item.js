import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Item({item, pressHandler}){
    return(
        <TouchableOpacity onPress = {() => (pressHandler(item.key))}>
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginVertical: 16,
        marginHorizontal: 7,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
      }
})