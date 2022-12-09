import { View, Text, Alert, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import CardMyReactions from "../components/CardMyReactions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import { ScrollView } from "react-native-gesture-handler";

export default function MyReactions() {
  const { token, idUser } = useSelector((state) => state.user);
  const { myreactions } = useSelector((state) => state.reactions);
  const { getMyReactions, deleteMyReactions } = reactionsActions;
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMyReactions({
        idUser: "6384de96d8b6f34da0f0868f",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODRkZTk2ZDhiNmYzNGRhMGYwODY4ZiIsIm5hbWUiOiJBbnRvbmVsbGEiLCJwaG90byI6Imh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1N1clF4cXFWS1A4SF84MEVoaG9FcF9wNWFHMlNUSEEtVDJYUSZ1c3FwPUNBVSIsImxvZ2dlZCI6dHJ1ZSwiaWF0IjoxNjcwNTQxMjU3LCJleHAiOjE3MDIwNzcyNTd9.RPmwux9V-3YGKe7ikxqNQjfwL5VryWy8EFcGGogvADE",
      })
    );
    // eslint-disable-next-line
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/myreactions.png")}
        style={{height:300}}
      >
        <View
          style={{
            height: 400,
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
      </ImageBackground>
      
      {myreactions?.map((item, index) => {
          const createTwoButtonAlert = () =>{
            Alert.alert("The reaction was deleted", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: () => dispatch(deleteMyReactions({ idReaction: item._id, token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODRkZTk2ZDhiNmYzNGRhMGYwODY4ZiIsIm5hbWUiOiJBbnRvbmVsbGEiLCJwaG90byI6Imh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1N1clF4cXFWS1A4SF84MEVoaG9FcF9wNWFHMlNUSEEtVDJYUSZ1c3FwPUNBVSIsImxvZ2dlZCI6dHJ1ZSwiaWF0IjoxNjcwNTQxMjU3LCJleHAiOjE3MDIwNzcyNTd9.RPmwux9V-3YGKe7ikxqNQjfwL5VryWy8EFcGGogvADE" })),
                },
              ]);
          }
          
        
        return (
          <CardMyReactions
          key={index}
            event={item.itineraryId || item.showId}
            nameReaction={item.name}
            reaction={item.icon}
            onPress={createTwoButtonAlert}
          />
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({});