import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";
import MuButton from "../components/MuButton";

const LoginForm = () => {
  return (
    <View>
      <Text style={styles.signIn}>Sign In</Text>
      <Input
        returnKeyType={"next"}
        autoCapitalize="none"
        placeholder="Username"
      />
      <Input secureTextEntry={true} placeholder="Password" />
      <MuButton
        color={"#f5f6fa"}
        backgroundColor={"#00a8ff"}
        text={"Sing In Now"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signIn: {
    marginVertical: 10,
    fontSize: 16,
    color: "black",
  },
});

export default LoginForm;
