import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Title } from "react-native-paper";

const Header = ({ titleText }) => {
  return (
    <Appbar.Header style={styles.headerContainer}>
      {/* <Appbar.BackAction>
        <Appbar.Content title={titleText} />
      </Appbar.BackAction> */}
      <View style={styles.contentContainer}>
        <Title style={styles.title}>{titleText}</Title>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#242424",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#fff",
  },
});

export default Header;
