import React from "react"; 
import Carousel from "../components/Carousel";

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Home = () => {
  

  return (
    <>
      <ScrollView style={styles.contenedor}>
        <ImageBackground
          resizeMode="cover"
          source={require("../../assets/fondoF.png")}
          style={styles.image}
        >
          <View style={styles.hero}>
            <Text style={styles.shadow}>MyTinerary</Text>
            <Text style={styles.shadow1}>
              Find your perfect trip, designed by insiders who know and love
              their cities!
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.containButton}>
          <View style={styles.containButtonn}>
            <TouchableOpacity
              style={styles.btCallToAction}
              onPress={() => props.navigation.navigate("cities")}
            >
              <Text
                style={{ color: "white", fontSize: 15, textAlign: "center" }}
              >
                Cities!
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btCallToAction}
              onPress={() => props.navigation.navigate("cities")}
            >
              <Text
                style={{ color: "white", fontSize: 15, textAlign: "center" }}
              >
                Hotels!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.titlePopular}>Popular My Tineraries !</Text>
        </View>
        <View>
			<Carousel></Carousel>
		</View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  hero: {
    height: 450,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 115,
    width: 115,
  },

  shadow: {
    fontSize: 75,
    padding: 9,
    color: "white",
  },

  shadow1: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    padding: 20,
  },

  image: {},

  btCallToAction: {
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: "rgb(169, 204, 227 )",
    width: "35%",
    borderRadius: 15,
    padding: 15,
    borderColor: "169, 204, 227 ",
  	margin: 5,
  },

  containButton: {
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "column",
    gap: 5,
  },
  containButtonn: {
    width: "100%",
    alignItems: "center",
    paddingTop: 10,
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    gap: 5,
  },
  choose: {
    fontSize: 25,
    fontFamily: "MerriweatherSans_700Bold",
  },
  titlePopular: {
    width: "100%",
    color: "black",
    textAlign: "center",
    fontSize: 30,
    padding: 1,
    marginBottom: 5,
    marginTop: 15,
  },
});
