import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Header from './components/header'
import Item from './components/item'

export default function App() {

  const userData = {name: "Matteo Canzari", prov: "TE", affiliation: "OAAb"};

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

    return (
    <View style={styles.container}>
       <Header></Header>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
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
