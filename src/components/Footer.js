import React from "react"
import { Text, View, StyleSheet } from "react-native"

const Footer = () => {
  return(
    <View style={styles.contenedor}>
      <Text style={styles.text}>MyTineraryNative || Tortoza Antonella & Andrea Castaño</Text>
    </View>  
  )
}

export default Footer

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "white",
    alignItems: "center",
    color: "black",
    justifyContent: "center",
    height: 80
  },
  text: {
    color: "black",
    textAlign: "center"
  }
})