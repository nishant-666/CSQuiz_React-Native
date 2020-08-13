import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 15,
    padding: 15,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Karla",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    color: "white",
    justifyContent: "space-between",
  },
});

export const Button = ({ text, onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonContainer = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>
);
