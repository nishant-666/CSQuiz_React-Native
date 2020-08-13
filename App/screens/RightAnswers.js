import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Container, Header, Content, Input, Item, Button } from "native-base";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
let customFonts = {
  Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff8e1",
  },
  text: {
    color: "#e65100",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
    margin: 20,
    fontFamily: "Poppins",
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between",
  },
});

class Quiz extends React.Component {
  state = {
    fontsLoaded: false,
  };
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar style="dark" />

        <Text style={styles.text}>
          Life is less about success and more about experience and knowledge.
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 20,
            textAlign: "center",
            letterSpacing: -0.02,
            fontWeight: "600",
            margin: 20,
            fontFamily: "Poppins",
            color: "#ff6f00",
          }}
        >
          Keep Shining, keep coding!
        </Text>

        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            marginBottom: 20,
            color: "#212121",
            fontFamily: "Poppins",
            color: "#ff6f00",
          }}
        >
          Try other quizzes as well?
        </Text>
        <Button
          iconLeft
          block
          style={{
            borderRadius: 10,
            backgroundColor: "#2196f3",
            marginLeft: 100,
            marginRight: 100,
          }}
          onPress={() => this.props.navigation.navigate("QuizIndex")}
        >
          <Text
            style={{
              color: "#fafafa",
              fontSize: 17,
              marginLeft: 5,
              fontFamily: "Poppins",
            }}
          >
            Take another Test?
          </Text>
        </Button>

        <Button
          iconLeft
          block
          style={{
            borderRadius: 10,
            backgroundColor: "#2196f3",
            marginLeft: 100,
            marginRight: 100,
            marginTop: 20,
          }}
          onPress={() => this.props.navigation.navigate("Inspiration")}
        >
          <Text
            style={{
              color: "#fafafa",
              fontSize: 17,
              marginLeft: 5,
              fontFamily: "Poppins",
            }}
          >
            Want somes inspiration?
          </Text>
        </Button>
      </View>
    );
  }
}

export default Quiz;
