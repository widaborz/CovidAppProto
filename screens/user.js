import React from 'react'; 
import {View, Text, StyleSheet} from 'react-native'; 
import { userData } from '../data/data';
import { globalStyles } from '../style/globalStyle';

export default function User(){
    return(
        <View>
            <View style = {styles.dataCointainer}>
                <Text style = {globalStyles.title}>User data from INAF or ASL</Text>
                <Text style = {globalStyles.colorBright}>{userData.name}</Text>
                <Text style = {globalStyles.colorBright}>{userData.affiliation}, ({userData.prov})</Text>
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    dataCointainer: {
        padding: 20,
        backgroundColor: '#1e99ff'
      }
}); 