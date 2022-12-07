import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import AwesomeAlert from "react-native-awesome-alerts";
import { showMessage, hideMessage } from "react-native-flash-message";
import { useRef, useState } from "react";
import usersActions from "../redux/actions/usersActions";
import { useDispatch } from "react-redux";

export default function Login() {
  let dispatch = useDispatch();
  let { enter } = usersActions;
  const [logIn, setLogIn] = useState({
    mail: "",
    password: "",
  });

  const handlerInput = (e, campo, value) => {
    setLogIn({
      ...logIn,
      [campo]: e || value,
    });
  };

  const submit = async () => {
    let inputs = Object.values(logIn).some((input) => input === "");
    if (!inputs) {
      try {
        let res = await dispatch(enter(logIn));
        if (res.payload.success) {
          Alert.alert("Hi", "Welcome to My Tinerary! 🤩", [
            {
              text: "OK",
            },
          ]);
        } else {
          Alert.alert("Error", "Your data is invalid ☹️", [
            {
              text: "OK",
            },
          ]);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      showMessage({
        message: "All the fields are required! ☹️",
        type: "danger",
        color: "white",
        backgroundColor: "purple",
      });
    }
  };

  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            resizeMode="cover"
            source={require("../../assets/map.png")}
            style={styles.image}
          >
            <Text style={styles.textTittle}>¡Welcome!</Text>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#333333"
              color="black"
              style={styles.inputSignUp}
              onChangeText={(e) => handlerInput(e, "mail")}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#333333"
              color="black"
              secureTextEntry={true}
              password={true}
              style={styles.inputSignUp}
              onChangeText={(e) => handlerInput(e, "password")}
            />
            <TouchableOpacity style={styles.button}>
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 18 }}
                onPress={submit}
              >
                Log In
              </Text>
            </TouchableOpacity>
            <Text style={{ color: "black", fontSize: 14, textAlign: "center" }}>
              Don't have an account?
            </Text>
            <Pressable onPress={() => props.navigation.navigate("signup")}>
              <Text
                style={{
                  color: "black",
                  fontSize: 17,
                  textAlign: "center",
                  textDecorationLine: "underline",
                }}
              >
                Sign Up
              </Text>
            </Pressable>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  textTittle: {
    color: "rgb(111, 164, 198 )",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 35,
    borderColor: "rgb (68, 78, 84 )",
    shadowColor: "black",
  },

  contenedor: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 900,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingRight: 5,
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
    backgroundColor: "rgb(111, 164, 198)",
    width: "30%",
    borderRadius: 30,
    padding: 10,
  },
});