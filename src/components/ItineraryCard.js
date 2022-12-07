import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Reaction from "./Reaction";

export default function ItineraryCard(props) {
  let { img, name, description, price, duration, id } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <View style={styles.containAll}>
      <View style={styles.card2}>
        <View style={styles.cardHeader}>
          <ImageBackground
            resizeMode="cover"
            source={{ uri: img }}
            style={styles.itineraryImage}
          >
            <Text style={styles.titleItinerary}>{name}</Text>
          </ImageBackground>
        </View>
        <View style={styles.cardBody}>
          <Text style={{ margin: 10 }}>{description}</Text>
          <View style={{ flexDirection: "row", margin: 5 }}>
            <Text style={{ marginRight: 25 }}>USD ${price}</Text>
            <Text>{duration} Hours 🕐 </Text>
          </View>
        </View>
        <View style={styles.containerReaction}>
          <Reaction eventId={id} type="itineraryId" />
        </View>
        <View style={styles.btnView}>
          <Text title="Comments" style={styles.button} onPress={handleOpen}>
            {" "}
            {open ? "Close " : ""}
            Comments{" "}
          </Text>
        </View>
      </View>
      {/* {open && (
        <View style={styles.inputComment}>
          <CommentsCard eventId={id}></CommentsCard>
        </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  containAll: {
    padding: 40,
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
  
});
