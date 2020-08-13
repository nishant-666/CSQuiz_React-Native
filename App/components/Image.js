import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 500,
    height: 400,
  },
});

const DisplayAnImage = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={{
          uri: "https://nishant666.online/logo.png",
        }}
      />
    </View>
  );
};

export default DisplayAnImage;
