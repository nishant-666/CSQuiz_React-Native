import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    marginTop: 200,

    width: screen.width / 4,
    height: screen.width / 4,
    borderRadius: screen.width / 5,
    alignItems: "center",
    justifyContent: "center",
  },
  circleCorrect: {
    marginTop: 200,

    width: screen.width / 4,
    height: screen.width / 4,
    borderRadius: screen.width / 5,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: screen.width / 5,
  },
});

export const Alert = ({ correct, visible }) => {
  if (!visible) return null;

  const icon = correct
    ? require("../assets/check.png")
    : require("../assets/close.png");

  const circleStyles = [styles.circle];

  if (correct) {
    circleStyles.push(styles.circleCorrect);
  }

  return (
    <View style={styles.container}>
      <View style={circleStyles}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
};
