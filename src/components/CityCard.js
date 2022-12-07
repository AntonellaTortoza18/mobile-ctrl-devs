import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

export default function CityCard(props) {
    let { img, name } = props;
  return (
   
        <View style={styles.containCities}>
            <ImageBackground imageStyle={{ borderRadius: 20}}
                  source={{uri: img}} style={styles.cityImage}>
                <Text style={styles.titleCity}>{name}</Text>
            </ImageBackground>
        </View>
     
  )
}
const styles = StyleSheet.create({
    containCities:{
      height: 370,
      width: "100%",
      marginBottom: 20,
      padding: 4,
      paddingBottom: 0,
      shadowColor: "grey",
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 15,
      
      elevation: 10,
      borderBottomLeftRadius:  50,
          borderBottomRightRadius:  50,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
    },
    cityImage: {
      height: "100%",
      width: "100%",
    } 
  ,
    titleCity:{
      textAlign: "center",
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.40)',
      borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          color: "#4b4d4e"
    },
  
  })