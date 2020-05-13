import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { dateFormater, getRandomColor } from "../utils";

const Card = ({ press, longPress, title, description, date }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  return (
    <View style={{ marginRight: 30 }}>
      <TouchableOpacity
        style={[styles.card, { backgroundColor: color }]}
        onPress={press}
        onLongPress={longPress}
      >
        <Text style={styles.cardDate}>{dateFormater(date)}</Text>
        <Text numberOfLines={1} style={styles.cardTitle}>
          {title}
        </Text>
        {/* <Text numberOfLines={1} style={styles.cardCategory}>
          {this.props.category}
        </Text> */}
        <Text numberOfLines={4} style={styles.cardContent}>
          {description}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 138,
    height: 138,
    borderRadius: 7,
    elevation: 5,
    padding: 12,
    marginBottom: 27,
  },
  cardDate: {
    color: "#fff",
    textAlign: "right",
    fontSize: 12,
    fontWeight: "800",
    marginBottom: 5,
  },
  cardCategory: {
    color: "#fff",
    fontSize: 13,
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 18,
  },
  cardContent: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
  },
});

export default Card;
