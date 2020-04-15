import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style = {styles.header}>
            <MaterialIcons name='menu' size={28} onPress = {openMenu}/>
            <Text style = {styles.title}> {title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        //backgroundColor: '#1e90ff',
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    title: {
        fontSize: 21,
        textAlign: "center", 
        //color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'gotu-regular', 
        letterSpacing: 1
    }
});