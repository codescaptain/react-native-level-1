import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholderTextColor="#ddd"
        {...props}
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 8,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#3333",
    fontSize: 14,
    fontWeight: "600",
    color: "#3333",
  },
});

export default Input;
