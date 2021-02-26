import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.headBackground} />
      <KeyboardAvoidingView behavior={"position"}>
        <View>
          <Text style={styles.logo}>UDAC</Text>
          <Text style={styles.logoDescription}>Property & Tax Survey</Text>
        </View>
        <ScrollView>
          <View style={styles.loginArea}>
            <Text style={styles.loginAreaTitle}>Property Tax Server</Text>
            <Text style={styles.loginAreaDescription}>
              Uniqe Door No Easliy Fill Your Entrie Property Tax Using App
            </Text>
            <LoginForm />
          </View>
        </ScrollView>
        <View style={styles.signUpArea}>
          <Text style={styles.signUpDescription}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Sign Up!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 90,
  },
  headBackground: {
    width: "100%",
    height: "50%",
    backgroundColor: "#00a8ff",
    position: "absolute",
    left: 0,
    top: 0,
    borderBottomRightRadius: 150,
  },
  logo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },
  logoDescription: {
    textAlign: "center",
    color: "white",
  },
  loginArea: {
    backgroundColor: "white",
    marginHorizontal: 40,
    marginVertical: 40,
    padding: 30,
    borderRadius: 15,

    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 20,
  },
  loginAreaTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  loginAreaDescription: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 13,
    color: "#7f8fa6",
  },
  signUpArea: {
    alignItems: "center",
  },
  signUpDescription: {
    color: "#dcdde1",
  },
});
