import React from 'react'; 
import {View, Text} from 'react-native'; 
import { userData } from '../data/data';
import { globalStyles } from '../style/globalStyle';

export default function User(){
    return(
        <View>
            <Text>User Data from INAF or ASL</Text>
            <View>
            <Text style = {globalStyles.title}>User data</Text>
            <Text>{userData.name}, {userData.affiliation}, ({userData.prov})</Text>
            </View>
        </View>
    ); 
}