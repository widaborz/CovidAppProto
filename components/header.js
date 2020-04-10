import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>INAF Covid-19 Tracking</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#1e90ff'
    },
    title: {
        fontSize: 21,
        textAlign: "center", 
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'gotu-regular'
    }
});