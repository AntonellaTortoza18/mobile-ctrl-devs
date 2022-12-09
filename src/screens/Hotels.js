import {
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import React from "react";
import { useEffect, useRef, useState } from "react";
import hotelsActions from "../redux/actions/hotelsActions";
import { useDispatch, useSelector } from "react-redux";
import HotelsCard from "../components/HotelsCard";

const Hotels = () => {
  const [first, setfirst] = useState("");
  const dispatch = useDispatch();
  const { getHotels, getHotelsFilter, getHotelsSelect } = hotelsActions;
  const { hotels, name } = useSelector((state) => state.hotels);

  useEffect(() => {
    if (name) {
      dispatch(getHotelsFilter(name));
    } else {
      dispatch(getHotels());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ScrollView>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/hotel.jpg")}
        style={styles.image}
      >
        <View style={styles.hero}></View>
      </ImageBackground>
      <View style={styles.containInput}>
        <Text style={styles.tittleFind}>!ENJOY OUR HOTELS!</Text>
        <TextInput
          placeholder="Search your destination..."
          style={styles.input}
          onChangeText={(e) => {
            setfirst(e);
            let text = e;
            dispatch(getHotelsFilter({ name: text }));
          }}
        />
      </View>
      <View style={styles.containImage}>
        <View style={styles.imageCity}>
          {hotels?.map((item, index) => {
            return (
              <HotelsCard
                idHotel={item._id}
                key={index}
                img={item.photo[0]}
                name={item.name}
              ></HotelsCard>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
export default Hotels;

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
  checkboxStyle: {
    marginBottom: 15,
    padding: 10,
  },
});
