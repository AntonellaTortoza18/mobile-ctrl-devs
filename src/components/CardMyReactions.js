import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function CardMyReactions(props) {
    let { event,  reaction, onPress } = props;
  return (
    <View style={{ flex: 1 , justifyContent:"center", alignItems:"center"}}>
      <View style={styles.container}>
        <Image
        resizeMode="cover"
          style={styles.image}
          source={{ uri: event.photo[0] }}
        />
        <View style={{ flex:1, flexDirection:"column", justifyContent: "center", width:220,}}>
          <Text style={{padding:20, textAlign:"center"}}>{event.name}</Text>
          <View style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:5}}>
         
          <Image style={{width:18, height:18,  marginTop: 40, marginLeft:10}}  source={{ uri: reaction }}/>
          <FontAwesome
           onPress={onPress}
            style={{
              marginTop: 40, alignItems:"flex-end",
            }}
            name="trash-o"
            size={25}
            color="black"
          />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "87%",
    marginTop:20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderWidth:1.5,
    borderRadius:8,
    
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    
  },
  image: {
    height: "100%",
    width: 150,
    borderBottomLeftRadius:8,
    borderTopLeftRadius:8
  
    
  },
});
