import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default function home(){
    return(
        <View>
            <View style={styles.dataCointainer}>
                <Text style = {styles.title}>User data</Text>
                <Text style = {styles.colorBright}>{userData.name}, {userData.affiliation}, ({userData.prov})</Text>
            </View>
            <View style = {styles.formContainer}>
                <Text style = {styles.blackTitle}>Presenti uno di questi sintomi?</Text>
                <FlatList
                numColumns = '3'
                    data = {monitoringPoint}
                    renderItem = {( {item} ) => (
                    <Item item = {item} pressHandler = {pressHandler} />
                    )}
                />
            </View>
            <View>
                <Button style = {styles.button} title = "Invia"></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dataCointainer: {
      padding: 20,
      backgroundColor: '#1e99ff'
    },
    formContainer: {
      padding: 20,
    },
    title: {
      fontSize: 15, 
      fontWeight: "bold", 
      color: "#fff"
    }, 
    blackTitle: {
      fontSize: 15, 
      fontWeight: "bold", 
      color: "#000"
    }, 
    colorBright: {
      color: "#fff"
    },
    button: {
      marginTop: 20, 
      padding: 20
    }
  });