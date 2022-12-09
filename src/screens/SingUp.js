import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import apiUrl from "../../url";


export default function SingUp() {
  const [signUp, setSignUp] = useState({
    name: "",
    lastName: "",
    photo: "",
    age: "",
    role: "user",
    mail: "",
    password: "",
  });
 

  const handlerInput = (e, campo, value) => {
    setSignUp({
      ...signUp,
      [campo]: e || value,
    });
  };

  const submit = async () => {
    let inputs = Object.values(signUp).some((input) => input === "");
    if (!inputs) {
      try {
        let res = await axios.post(`${apiUrl}api/auth/sign-up`, signUp);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.contenedor} >
      <ImageBackground
        resizeMode="contain"
        source={require("../../assets/map.png")}
        style={styles.image}
      >
        <TextInput
          style={styles.inputSignUp}
          id="name"
          placeholderTextColor="#333333"
          color="black"
          placeholder="Name"
          onChangeText={(e) => handlerInput(e, "name")}
        />
        <TextInput
          style={styles.inputSignUp}
          id="LastName"
          placeholderTextColor="#333333"
          color="black"
          placeholder="LastName"
          onChangeText={(e) => handlerInput(e, "lastName")}
        />
        <TextInput
          style={styles.inputSignUp}
          id="photo"
          color="black"
          placeholderTextColor="#333333"
          placeholder="URL photo"
          onChangeText={(e) => handlerInput(e, "photo")}
        />
        <TextInput
          style={styles.inputSignUp}
          id="Age"
          color="black"
          placeholderTextColor="#333333"
          placeholder="Age"
          onChangeText={(e) => handlerInput(e, "age")}
        />
        <TextInput
          style={styles.inputSignUp}
          id="mail"
          placeholderTextColor="#333333"
          color="black"
          placeholder="Email"
          onChangeText={(e) => handlerInput(e, "mail")}
        />
        <TextInput
          style={styles.inputSignUp}
          id="password"
          placeholderTextColor="#333333"
          color="black"
          placeholder="Password"
          onChangeText={(e) => handlerInput(e, "password")}
        />
        <TouchableOpacity style={styles.button}>
          <Text
            style={{ textAlign: "center", color: "white", fontSize: 18 }}
            onPress={submit}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "#1c7cafe6", fontSize: 14, textAlign: "center" }}>
          Already have an account?
        </Text>
        <Pressable>
          <Text
            style={{
              color: "#1c7cafe6",
              fontSize: 17,
              textAlign: "center",
              textDecorationLine: "underline",
            }}
          >
            Log In
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "100%",
    width: "100%",
    minHeight: "100%",
  },
  image: {
    width: "100%",
    alignItems: "center",
    marginBottom:60
  },
  inputSignUp: {
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    width: "65%",
    borderRadius: 30,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    marginBottom: 20,
    fontSize: 20,
  },
  button: {
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: "#1c7cafe6",
    width: "30%",
    borderRadius: 30,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  dropdown1BtnStyle: {
    width: "65%",
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    borderRadius: 30,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    marginBottom: 20,
    fontSize: 20,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "black", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "black", textAlign: "left" },
});
