import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native'
import { globalStyles } from '../style/globalStyle'
import Item from '../components/item'

export default function Home({userData}){

    const [monitoringPoint, setMonitoringPoint] = useState([
        {name: "tosse", key: "1"},
        {name: "febbre", key: "3"},
        {name: "stanchezza", key: "4"},
        {name: "difficoltà respiratorie", key: "5"},
        {name: "riduzione gusto olfatto", key: "6"}
      ]);
    
      const pressHandler = (key) => {
        setMonitoringPoint(prevMonitoringPoint => {
          return prevMonitoringPoint.filter(monitoringPoint => monitoringPoint.key != key);
        });
      };
    
    return(
        <View>
            <View style={styles.dataCointainer}>
                <Text style = {globalStyles.title}>User data</Text>
                <Text style = {globalStyles.colorBright}>{userData.name}, {userData.affiliation}, ({userData.prov})</Text>
            </View>
            <View style = {styles.formContainer}>
                <Text style = {globalStyles.blackTitle}>Presenti uno di questi sintomi?</Text>
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
    button: {
      marginTop: 20, 
      padding: 20
    }
  });