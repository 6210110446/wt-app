import React from "react";
import { View,Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Forecast(props) {
    return (
    <View style = {styles.backdrop} >
        <Text style = {styles.text}>{props.main}</Text>
        <Text>{props.description}</Text>
        <View>
            <Text>{props.temp}</Text>
            <Text>°C</Text>
            <Text>{props.temp*1.8+32}</Text>
            <Text>°F</Text>
        </View>
    </View>
    );
   }

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        height: '50%'
    },
    text: {
        color : "#FAC",
        fontSize: 40,
        fontWeight: 'bold',
    }
});