import React from "react";
import { Text } from "react-native";
import { StyleSheet,View } from "react-native";
import { useState } from "react";
import { ImageBackground } from "react-native";
import Forecast from "./Forecast";
import { useEffect } from "react";
export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=00dd3013b9ea996c23c6142a0299cd3c`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
        const [forecastInfo, setForecastInfo] = useState({
            main: '-',
            description: '-',
            temp: 0
    }) 
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
 );
}
const styles = StyleSheet.create({
    backdrop: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
    },
   });
   