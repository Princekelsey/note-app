import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, TextInput, FAB } from "react-native-paper";
import Header from "../components/Header";
import Database from "../../database/index";

const EditNote = ({ navigation }) => {
  const [noteTitle, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const updateNote = () => {
    Database.updateNote(id, noteTitle, description);
    navigation.state.params.listenToStateChange();
    navigation.goBack();
  };

  const getData = () => {
    const id = navigation.getParam("id", "null");
    const title = navigation.getParam("title", "null");
    const description = navigation.getParam("description", "null");

    setDescription(description);
    setTitle(title);
    setId(id);
  };

  return (
    <>
      <Header titleText="Edit Note" />
      <IconButton
        icon="close"
        size={25}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      />
      <View style={styles.container}>
        <TextInput
          label="Note title"
          value={noteTitle}
          mode="outlined"
          onChangeText={setTitle}
          style={styles.title}
        />
        <TextInput
          label="Note description"
          value={description}
          onChangeText={setDescription}
          mode="flat"
          multiline={true}
          style={styles.text}
          returnKeyLabel="done"
          blurOnSubmit={true}
          scrollEnabled={true}
        />
        <FAB
          small
          icon="check"
          disabled={noteTitle === "" ? true : false}
          style={styles.fabBtn}
          onPress={() => updateNote()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#ffff",
  },
  titleContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  backBtn: {
    backgroundColor: "#219653",
    position: "absolute",
    top: 40,
    right: 0,
    margin: 10,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fabBtn: {
    position: "absolute",
    right: 0,
    margin: 20,
    bottom: 0,
  },
});

export default EditNote;
