import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../url";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function InputEdit({ route }) {
  let { commentId, eventId } = route.params;
  const { idUser, token } = useSelector((state) => state.user);
  const [create, setCreate] = useState({
    userId: idUser,
    showId: eventId,
    comment: "",
    date: "10-12-2022",
  });

  const handlerInput = (e, campo, value) => {
    setCreate({
      ...create,
      [campo]: e || value,
    });
  };

  const submit = async () => {
    let inputs = Object.values(create).some((input) => input === "");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    if (!inputs) {
      try {
        let res = await axios.put(`${apiUrl}api/comments/${commentId}`, create, headers);
        console.log(res);
        if (res.data.success) {
          Alert.alert(user.name, "The comment was modified successfully", [
            {
              text: "Back to comments",
             /*  onPress: () => navigation.navigate(),  */
           /*   onPress:()=> navigation.goBack() */
            },
          ]);
        } else {
          Alert.alert("Error", "Your comment could not be modified☹️", [
            {
              text: "OK",
            },
          ]);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      Alert.alert("Error", "All the fields are required! ☹️", [
        {
          text: "OK",
        },
      ]);
    }
  };

  return (
    <ImageBackground
          resizeMode="cover"
          source={require("../../assets/fondoF.png")}
          style={styles.image}
        >
    <View style={styles.containerTodo}>
      <View>
        <View>
          <View style={styles.containInput}>
            <TextInput
              placeholder="Edit your comment"
              id="comment"
              style={styles.input}
              placeholderTextColor="#333333"
              color="black"
              onChangeText={(e) => handlerInput(e, "comment")}
            />
          </View>
          <View style={styles.containBtn}>
            <TouchableOpacity style={styles.button}>
              <Text
                style={{ textAlign: "center", color: "black", fontSize: 18 }}
                onPress={submit}
              >
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containInput: {
    width: "100%",
    alignItems: "center",
    padding: 25,
  },

  image: {
    width: "100%",
    height: 1000,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingRight: 5,
  },

  input: {
    backgroundColor: "#c5c9cd",
    width: 250,
    height: 100,
    borderRadius: 10,
    borderColor: "#d8ddf5",
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    padding: 20,
    fontSize: 21,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  containBtn: {
    flexDirection: "column",
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  containerTodo: {
    marginTop: 50,
    margin: 20,
    height: 300,
    shadowColor: "rgb( 34, 142, 211 )",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  button: {
    width: 100,
    backgroundColor: "rgb(111, 164, 198)",
    alignContent: "center",
    borderRadius: 30,
  },
});
