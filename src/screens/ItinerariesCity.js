import {
    View,
    ScrollView,
    ImageBackground,
    StyleSheet,
    Text
    
  
  } 
  from "react-native";
  import React from "react";
  import { useEffect, useState} from "react";
  import ItineraryCard from "../components/ItineraryCard";
import axios from "axios";
import apiUrl from "../../url";

  

  
  export default function ItinerariesCity() {
    let [itineraries, setItineraries] = useState([]);


  
    useEffect(() => {
        axios.get(`${apiUrl}api/itineraries`)
      .then((res) => setItineraries(res.data.response));
  
      // eslint-disable-next-line
    }, []);
  
   
  
  
  
  
    return (
      <ScrollView>
        <ImageBackground
          resizeMode="cover"
          source={require("../../assets/iti2.jpg")}
          style={styles.image}
        >
          <View style={styles.hero}></View>
        </ImageBackground>
        <Text style={styles.tittleFind}>I T I N E R A R I E S .</Text>
        <View style={styles.containImage}>
          <View style={styles.imageCity}>
            {itineraries?.map((item, index) => {
              return (
                <ItineraryCard
                  key={index}
                  img={item.photo[0]}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  duration={item.duration}
                  id={item._id}
                
                ></ItineraryCard>
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
      fontSize: 5,
      color: "white",
    },
    subTitle: {
      textAlign: "center",
      color: "white",
    },
    image: {
      height:300
    },
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
      paddingTop: 30,
      flexDirection: "row",
      color: "rgba(205, 205, 205, 1)",
      fontSize: 30,
      textAlign:"center"
    },
    checkboxStyle: {
      marginBottom: 15,
      padding: 10,
    },

  });
  