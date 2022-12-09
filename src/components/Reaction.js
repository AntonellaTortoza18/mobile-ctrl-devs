import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";

export default function Reaction(props) {
  let { eventId, type } = props;
  const { token, idUser } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  const { getReactions, updateReactions } = reactionsActions;
  const [reaction, setReaction] = useState([]);
  const [reload, setReload] = useState(true);

  async function changeIcon(event) {
    let name;
    reaction.reactions.data.forEach((e) => {
      if (e.name === event) {
        name = e.name;
      }
    });
    try {
      let datos = {
        token: token,
        type: type,
        eventId: eventId,
        name: name,
      };
      await dispatch(updateReactions(datos));
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    reactions();
    // eslint-disable-next-line
  }, [reload]);

  async function reactions() {
    let res = await dispatch(getReactions({ eventId, type }));
    setReaction(res.payload);
  }

  return (
    <>
      {reaction.success &&
        reaction.reactions.data?.map((e) => {
          let res = e.userId.find((user) => user._id === idUser);
          return res ? (
            <>
            <TouchableOpacity onPress={()=>{
              changeIcon(e.name)
              
            }}>
              <Image
              style={styles.imageIcon}
                source={{ uri: e.icon }}
                alt={e.name}
                name={e.name}
                key={e.name}
              />
                </TouchableOpacity>
              
              <Text>{reaction.reactions.lengthOfReactions[e.name]}</Text>
            </>
          ) : (
            <>
             <TouchableOpacity onPress={()=>{
              changeIcon(e.name)
            }}>
              <Image
               style={styles.imageIcon}
                source={{ uri: e.iconBack }}
                alt={e.name}
                name={e.name}
                key={e.name}
              />
              </TouchableOpacity>
              <Text>{reaction.reactions.lengthOfReactions[e.name]}</Text>
              
            </>
          );
        })}
    </>
  );
}
const styles = StyleSheet.create({
    imageIcon:{
    width:20,
    height:20,
    margin: 20
    },
})
