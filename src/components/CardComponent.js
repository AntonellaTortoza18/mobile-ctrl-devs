import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  onPress,
  Image,
} from "react-native";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import commentsAction from "../redux/actions/commentAction";

export default function CardComponent(props) {
  let { eventId } = props;
  const dispatch = useDispatch();
  const { getComment, createComment, deleteComment, editComment } =
    commentsAction;
  let [comments, setComments] = useState([]);
  let [reload, setReload] = useState(true);

  useEffect(() => {
    getMyComments();
  }, [reload]);

  async function getMyComments() {
    let res = await dispatch(getComment({ id: eventId }));
    setComments(res.payload.comments);
  }



  return (
    
    <View style={styles.containerTodo}>
        <View  style={styles.index}>
          <TextInput placeholder="Comment" style={styles.input} />
          {comments?.map((item) => {
            return (
                <ScrollView>
              <View  >
                <View>
                  <View>
                    <View>
                      <View>
                        <Image
                          source={{ uri: item?.userId?.photo }}
                          style={styles.image}
                        />
                        <Text>{item.userId?.name} </Text>
                      </View>
                      <View>
                        <Text>{item.comment}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              </ScrollView>
            );
          })}
        </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
 
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
  image: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 20,
  },

  index : {
    position: 'absolute', 
    zIndex: 5,
  },
  containerTodo:{
     flex: 1,
     justifyContent: "center",
     flexDirection: "row",
  }
});
