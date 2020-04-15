import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import { globalStyles } from '../style/globalStyle'
import Item from '../components/item'
import Symptom from '../components/symptom'
export default function Home({ navigation }){

    const [monitoringPoint, setMonitoringPoint] = useState([
        {name: "tosse", key: "1"},
        {name: "stanchezza", key: "4"},
        {name: "difficoltà respiratorie", key: "5"},
        {name: "riduzione gusto olfatto", key: "6"}
      ]);

      const [symptoms, setSymptoms] = useState([]);
    
      const addSymptom = (key) => {
          setSymptoms(prevSymptoms => {
            return [
              monitoringPoint.filter(monitoringPoint => monitoringPoint.key==key)[0],
              ...prevSymptoms
            ];
          })
          setMonitoringPoint(prevMonitoringPoint => {
          return prevMonitoringPoint.filter(monitoringPoint => monitoringPoint.key != key);
        });
      };

      const removeSymptom = (key) => {
        setMonitoringPoint(prevMonitoringPoint => {
          return[
            symptoms.filter(symptoms => symptoms.key == key)[0],
            ...prevMonitoringPoint
          ]
        })
        setSymptoms(prevSymptoms => {
          return prevSymptoms.filter(symptoms => symptoms.key != key)
        })
    };

      const pressInsertParameter = () => {
        navigation.push('ItemDetail'); 
      }; 
    
    return(
        <View>
            <View style = {styles.formContainer}>
            <Text style = {globalStyles.blackTitle}>1. Inserisci i tuoi parametri misurabili</Text>
              <TouchableOpacity style = {globalStyles.touchableAction} onPress = {pressInsertParameter}>
                 <Text>Inserisci parametri (pressione, temperatura..)</Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.formContainer}>
                <Text style = {globalStyles.blackTitle}>2. Presenti uno di questi sintomi?</Text>
                <FlatList
                numColumns = '2'
                    data = {monitoringPoint}
                    renderItem = {( {item} ) => (
                    <Item item = {item} pressHandler = {addSymptom} />
                    )}
                    ListEmptyComponent = {() =>
                      <Text style = {styles.formContainer}>Nessun altro sintomo da inserire</Text>
                    }
                />
            </View>
            <View style = {styles.formContainer}>
                <Text style = {globalStyles.blackTitle}>3. Invia il tuo report</Text>
                <FlatList
                numColumns = '2'
                    data = {symptoms}
                    renderItem = {( {item} ) => (
                    <Symptom symptom = {item} pressHandler = {removeSymptom} />
                    )}
                ListEmptyComponent = {() =>
                  <Text style = {styles.formContainer}>Nessun sintomo inserito</Text>
                }
                />
  
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