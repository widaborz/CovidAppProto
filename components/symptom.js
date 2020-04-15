import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


export default function Symptom({symptom, pressHandler}){
    return(
        <TouchableOpacity style = {styles.touchableSymptom} onPress = {() => pressHandler(symptom.key)}>
            <MaterialIcons name = "delete" color = "white" size = {20} style = {styles.icon}/><Text style = {styles.symptomText}>{symptom.name}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    touchableSymptom: {
        paddingVertical: 16,
        paddingRight: 16,
        marginVertical: 16,
        marginHorizontal: 7,
        borderRadius: 1,
        borderRadius: 10,
        backgroundColor: "green",
        flexDirection: "row"
      }, 
      symptomText: {
        color: "#fff"
      }, 
      icon: {
          paddingRight: 5, 
          paddingLeft: 5
      }
}); 