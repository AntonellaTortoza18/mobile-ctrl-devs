import React, { useEffect, useState } from "react";
import citiesActions from "../redux/actions/citiesActions";
import hotelsActions from "../redux/actions/hotelsActions";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  requireNativeComponent,
} from "react-native";

export default function Carousel() {
  let [number, setNumber] = useState(1);
  let [detailsHotels, setDetailHotels] = useState([]);
  let [detailsCities, setDetailCities] = useState([]);
  let [details, setDetails] = useState([]);
  let [id, setId] = useState(0);
  const dispatch = useDispatch();
  const { getCities } = citiesActions;
  const { cities } = useSelector((state) => state.cities);
  const { getHotels } = hotelsActions;
  const { hotels } = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getCities());
    dispatch(getHotels());
  }, []);

  useEffect(() => {
    let idInterval = setInterval(
      () => {
        next();
      },

      5000
    );
    setId(idInterval);
    return clearInterval(id);
    // eslint-disable-next-line
  }, [number]);

  let prev = () => {
    if (number !== 0) {
      setNumber(--number);
    } else {
      setNumber(details.length - 1);
    }
    clearInterval(id);
  };
  let next = () => {
    if (number !== details.length - 1) {
      setNumber(++number);
    } else {
      setNumber(0);
    }
    clearInterval(id);
  };

  function aleatory(number) {
    return Math.floor(Math.random() * number);
  }

  setDetailHotels = hotels.map((hotel) => {
    if (detailsHotels.length < 4 && !detailsHotels.includes(hotel.photo)) {
      detailsHotels.push(hotel.photo[aleatory(hotel.photo.length - 1)]);
    }
  });

  setDetailCities = cities.map(() => {
    let citiesAleatory = aleatory(cities.length - 1);
    if (detailsCities.length < 4 && !detailsCities.includes(cities.photo)) {
      detailsCities.push(cities[citiesAleatory].photo);
    }
  });

  if (details.length < 4) {
    // eslint-disable-next-line
    setDetails = details.push(detailsCities, detailsHotels);
  }

  return (
    <View>
      <View>
        <View>
          <View style={styles.containImages}>
            <Text onPress={() => prev()} style={styles.btn} > ← </Text>
            <View style={styles.containImages}>
              {details[number].map((photo, index) => {
                return <Image style={styles.image} key={index} source={{ uri: photo }} />;
              })}
            </View>
            <Text onPress={() => next()} style={styles.btn}> → </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
    margin: 5,
    borderRadius: 10,
  },

  containImages: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    paddingEnd: 10,
    flexWrap: "wrap",
  },

  btn : {
    fontSize: 20,
    backgroundColor: "rgb(169, 204, 227 )",
    borderRadius: 10,
    
  }
});
