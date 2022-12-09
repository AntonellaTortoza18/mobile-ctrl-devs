import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import axios from "axios";
import apiUrl from "../../url";
import { useEffect, useState } from "react";

export default function DetailsCity({ route }) {
  let { cityId } = route.params;
  let [cities, setCities] = useState([]);

  const city = async () => {
    try {
      const res = await axios.get(`${apiUrl}api/cities/${cityId}`);
      setCities(res.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  city();

  return (
    <View>
      <Image
        resizeMode="cover"
        source={require("../../assets/mytinerary.jpg")}
        style={styles.image}
      />
      <View style={styles.containAll}>
        <View style={styles.card2}>
          <View style={styles.cardHeader}>
            <ImageBackground
              resizeMode="cover"
              source={{ uri: cities.photo }}
              style={styles.itineraryImage}
            >
              <Text style={styles.titleItinerary}>{cities.name}</Text>
            </ImageBackground>
          </View>
          <View style={styles.cardBody}>
            <View style={{ flexDirection: "column", margin: 5 }}>
              <Text>Zone: {cities.zone} </Text>
              <Text style={{ marginRight: 25 }}>
                Population : {cities.population}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containAll: {
    padding: 40,
    paddingTop: 50,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },

  containItineraries: {
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
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  itineraryImage: {
    height: 200,
  },

  titleItinerary: {
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 27,
    backgroundColor: "rgba(255, 255, 255, 0.40)",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    color: "black",
  },

  card2: {
    margin: 10,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 30,
    width: 300,
    minHeight: 300,
    paddingBottom: 10,
    overflow: "hidden",
  },
  cardHeader: {
    padding: 1,
  },

  cardBody: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  containerReaction: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },

  btnView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 25,
  },
  button: {
    fontSize: 20,
  },

  image: {
    height: 300,
    width: 500,
  },
});