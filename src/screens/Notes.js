import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ScrollView, Alert } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import Header from "../components/Header";
import Card from "../components/Card";
import Database from "../../database/index";

const Notes = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const [isStateChanged, setIsStateChanged] = useState(false);

  useEffect(() => {
    Database.selectAllNotes(setData);
  }, [isStateChanged]);

  const setData = (data) => {
    setNotes(data);
  };

  const listToStateChange = () => {
    setIsStateChanged(!isStateChanged);
  };

  const _onPress = (id, title, description, listToStateChange) => {
    navigation.navigate("EditNote", {
      id,
      title,
      description,
      listToStateChange,
    });
  };

  const _onLongPress = (id) => {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this note?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            Database.deleteNote(id);
            listToStateChange();
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <>
      <Header titleText="Magic Notes" />
      <View style={styes.container}>
        {notes.length ? (
          <ScrollView>
            <View style={styes.content}>
              <FlatList
                data={notes}
                numColumns={2}
                renderItem={({ item }) => (
                  <Card
                    title={item.title}
                    description={item.description}
                    date={item.time}
                    press={() =>
                      _onPress(
                        item.id,
                        item.title,
                        item.description,
                        listToStateChange
                      )
                    }
                    longPress={() => _onLongPress(item.id)}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </ScrollView>
        ) : (
          <View style={styes.titleContainer}>
            <Text style={styes.text}>You don't have any notes yet</Text>
          </View>
        )}

        <FAB
          style={styes.addBtn}
          small
          icon="plus"
          // label="Add new note"
          onPress={() => navigation.navigate("AddNote", { listToStateChange })}
        />
      </View>
    </>
  );
};

const styes = StyleSheet.create({
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
  text: {
    fontSize: 20,
  },

  addBtn: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 10,
    // margin: 16,
    // right: 0,
    // bottom: 0,
    backgroundColor: "#219653",
  },
  listTitle: {
    fontSize: 20,
  },
  content: {
    marginLeft: 40,
    justifyContent: "space-between",
    paddingTop: 20,
  },
});

export default Notes;
