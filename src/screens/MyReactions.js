import { View, Text, Alert, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import CardMyReactions from "../components/CardMyReactions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import { ScrollView } from "react-native-gesture-handler";

export default function MyReactions() {
  const { token, idUser, user } = useSelector((state) => state.user);
  const { myreactions } = useSelector((state) => state.reactions);
  const { getMyReactions, deleteMyReactions } = reactionsActions;
  let dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(
      getMyReactions({
        idUser,
        token,
      })
    );
    // eslint-disable-next-line
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/myreactions.png")}
        style={{ height: 300 }}
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
       function deleteReaction() {
        Alert.alert(
          user.name,
          "Would do you like delete this reaction?",
          
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            { text: "OK", onPress: () =>{dispatch(
              deleteMyReactions({
                idReaction: item._id,
                token,
              })
            )}} 
          ]
        )

       } 
        return (
          <CardMyReactions
            key={index}
            event={item.itineraryId || item.showId}
            nameReaction={item.name}
            reaction={item.icon}
            onPress={deleteReaction}
          />
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({});
