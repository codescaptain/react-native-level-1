import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const MuButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.backgroundColor }]}
    >
      <Text style={[styles.textI, { color: props.color }]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  textI: {
    textAlign: "center",
  },
});

export default MuButton;
