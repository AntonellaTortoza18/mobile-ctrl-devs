import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  onPress,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import commentsAction from "../redux/actions/commentAction";
import axios from "axios";
import apiUrl from "../../url";
import { useNavigation } from '@react-navigation/native';

export default function CardComponent({ route }) {
  let { eventId } = route.params;
  const navigation = useNavigation();
  const { idUser, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { getComment, createComment, deleteComment, editComment } =
    commentsAction;
  let [comments, setComments] = useState([]);
  let [reload, setReload] = useState(true);
  const [create, setCreate] = useState({
    userId: idUser,
    showId: eventId,
    comment: "",
    date: "10-12-2022",
  });



  useEffect(() => {
    getMyComments();
  }, [reload]);

  async function getMyComments() {
    let res = await dispatch(getComment({ id: eventId }));
    setComments(res.payload.comments);
    setReload(!reload);
  }

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

        let res = await axios.post(`${apiUrl}api/comments`, create, headers);
        console.log(res);
        setReload(!reload);
        if (res.data.success) {
          Alert.alert(user.name, "The comment was created successfully 🤩", [
            {
              text: "OK",
            },
          ]);
        } else {
          Alert.alert("Error", "Your comment could not be posted☹️", [
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
    <View style={styles.containerTodo}>
      <ScrollView>
        <View style={styles.index}>
          <View>
            <View style={styles.containInput}>
              <TextInput
                placeholder="Leave your comment"
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
                  Post
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containComme}>
            {comments?.map((item) => {
              return (
                <View>
                  <View>
                    <View>
                      <View style={styles.com}>
                        <View style={{ margin: 15 }}>
                          <Image
                            source={{ uri: item?.userId?.photo }}
                            style={styles.image}
                          />
                          <Text style={{ marginLeft: -10 }}>
                            {item.userId?.name}{" "}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ marginLeft: 20 }}>{item.comment}</Text>
                        </View>
                        <View style={styles.containIcon}>
                            <TouchableOpacity onPress={() => navigation.navigate('InputEdit', {commentId: item._id})}>
                          <Image
                            source={require("../../assets/editar.png")}
                            style={styles.edit}
                          />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() =>
                              Alert.alert(
                                user.name,
                                "Are you sure to delete the comment?",
                                [
                                  {
                                    text: "OK",
                                    onPress: async () => {
                                      let headers = { headers: { Authorization: `Bearer ${token}` } };
                                      try {
                                        await axios.delete(
                                          `${apiUrl}api/comments/${item._id}`,
                                        headers);
                                      } catch {}
                                    },
                                  },
                                  {
                                    text: "Cancel",
                                    style: "cancel",
                                  },
                                ]
                              )
                            }
                          >
                            <Image
                              source={require("../../assets/eliminar.png")}
                              style={styles.edit}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingRight: 5,
  },
  containInput: {
    width: "100%",
    alignItems: "center",
    padding: 25,
  },

  edit: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  containIcon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 50,
  },

  input: {
    backgroundColor: "#c5c9cd",
    width: 250,
    height: 60,
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
  image: {
    width: 50,
    height: 50,
    margin: 8,
    marginLeft: -10,
    borderRadius: 20,
    marginTop: 15,
  },

  containBtn: {
    flexDirection: "column",
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  containerTodo: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 100,
    margin: 20,
    height: 650,
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
  containComme: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "baseline",
  },

  com: {
    flexDirection: "row",
    alignItems: "center",
    margin: 30,
    width: 300,
    height: 130,
    padding: 30,
    justifyContent: "center",
    shadowColor: "rgb(111, 164, 198)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 8,
    borderRadius: 20,
  },
  button: {
    width: 100,
    backgroundColor: "rgb(111, 164, 198)",
    alignContent: "center",
    borderRadius: 30,
  },
});
