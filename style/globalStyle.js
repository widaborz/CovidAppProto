import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    title: {
        fontSize: 15, 
        fontWeight: "bold", 
        color: "#fff",
        fontFamily: "gotu-regular"
      }, 
      blackTitle: {
        fontSize: 15, 
        fontWeight: "bold", 
        color: "#000", 
        fontFamily: "gotu-regular"
      }, 
      colorBright: {
        color: "#fff"
      },
      touchableItem: {
        padding: 16,
        marginVertical: 16,
        marginHorizontal: 7,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
      }, 
      touchableAction: {
        flexDirection: 'row',
        padding: 16,
        marginVertical: 16,
        marginHorizontal: 7,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 1,
        borderRadius: 10,
      }, 
});