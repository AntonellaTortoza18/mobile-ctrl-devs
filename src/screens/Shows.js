import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../url";
import { View, ScrollView, ImageBackground, StyleSheet, TextInput, Text, } from "react-native";
  import ShowsCard from "../components/ShowsCard";
  

export default function Shows() {
    let [shows, setShows] = useState([]);

    useEffect(() => {
        axios
          .get(`${apiUrl}api/shows`)
          .then((res) => setShows(res.data.response));
    
        // eslint-disable-next-line
      }, []);

    


      return (
        <ScrollView>
          <ImageBackground
            resizeMode="cover"
            source={require("../../assets/fondo.png")}
            style={styles.image}
          >
            <View style={styles.hero}></View>
          </ImageBackground>
          <View style={styles.containInput}>
            <Text style={styles.tittleFind}>!ENJOY OUR SHOWS!</Text>
          </View>
          <View style={styles.containImage}>
            <View style={styles.imageCity}>
              {shows?.map((item, index) => {
                return (
                  <ShowsCard
                    idShow={item._id}
                    key={index}
                    img={item.photo}
                    name={item.name}
                    price={item.price}
                    capacity={item.capacity}
                    description={item.description}
                  ></ShowsCard>
                );
              })}
            </View>
          </View>
        </ScrollView>
      );
}

const styles = StyleSheet.create({
    hero: {
      height: 400,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 35,
      color: "white",
    },
    subTitle: {
      textAlign: "center",
      color: "white",
    },
    image: {},
    containInput: {
      width: "100%",
      alignItems: "center",
      padding: 25,
    },
    input: {
      backgroundColor: "#c5c9cd",
      width: "85%",
      borderRadius: 10,
      borderColor: "#d8ddf5",
      paddingBottom: 5,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 6,
      padding: 20,
      fontSize: 21,
      textAlign: "center",
      justifyContent: "center",
    },
    contenedor: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    containImage: {
      width: "100%",
      padding: 10,
    },
    imageCity: {
      width: "100%",
      marginBottom: 15,
    },
    titleCities: {
      textAlign: "center",
    },
    titleAnother: {
      alignItems: "center",
      marginBottom: 30,
    },
    container: {
      flexWrap: 1,
      flexDirection: "row",
      marginBottom: 20,
      alignItems: "center",
      justifyContent: "center",
      padding: 3,
    },
    label: {
      margin: 8,
    },
    tittleFind: {
      paddingTop: 3,
      paddingBottom: 15,
      color: "rgba(205, 205, 205, 1)",
      fontSize: 30,
    },
  
  });
  