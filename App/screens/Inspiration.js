import React, { Component } from "react";
import { ScrollView, Text, View, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
} from "native-base";
import Constants from "expo-constants";
let customFonts = {
  Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
};
export default class Inspiration extends Component {
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
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ marginTop: 20, width: "100%" }}>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                height: 70,
                paddingTop: 30,
                marginTop: 20,
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 23,
                  marginLeft: 0,
                  fontFamily: "Poppins",
                  color: "#2196f3",
                }}
              >
                Some Inspirational Quotes!
              </Text>
            </View>
            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                "He who is not courageous enough to take risks will accomplish
                nothing in life."
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                “You can have anything you want if you want it badly enough. You
                can be anything you want to be, do anything you set out to
                accomplish if you hold to that desire with singleness of
                purpose.”
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                “Here I am . . . wanting to accomplish something and completely
                forgetting it must all end—that there is such a thing as death.”
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                "Knowing is not enough; we must apply. Willing is not enough; we
                must do."
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                "Failures are made only by those who fail to dare, not by those
                who dare to fail."
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                “Courage is the most important of all the virtues because,
                without courage, you can’t practice any other virtue
                consistently.”
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                “The key to life is accepting challenges. Once someone stops
                doing this, he’s dead.”
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                "Failure will never overtake me if my determination to succeed
                is strong enough."
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                "Optimism is the faith that leads to achievement. Nothing can be
                done without hope and confidence."
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                "The mind is the limit. As long as the mind can envision the
                fact that you can do something, you can do it, as long as you
                really believe 100 percent."
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                “I don’t care how much power, brilliance or energy you have, if
                you don’t harness it and focus it on a specific target, and hold
                it there you’re never going to accomplish as much as your
                ability warrants.”
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                "Only those who have learned the power of sincere and selfless
                contribution experience life's deepest joy: true fulfillment."
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                “If you devote yourself entirely to a noble pursuit, there is no
                way you cannot find beauty and fulfillment.”
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                “Goals. There’s no telling what you can do when you get inspired
                by them. There’s no telling what you can do when you believe in
                them. And there’s no telling what will happen when you act upon
                them.”
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                “There is nothing noble in being superior to your fellow man;
                true nobility is being superior to your former self.”
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                "Knowledge is power. Information is liberating. Education is the
                premise of progress, in every society, in every family."
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                "With mindfulness, you can establish yourself in the present in
                order to touch the wonders of life that are available in that
                moment."
              </Text>
            </ListItem>

            <ListItem>
              <Text style={{ fontSize: 18, fontFamily: "Poppins" }}>
                "Mindfulness is about love and loving life. When you cultivate
                this love, it gives you clarity and compassion for life, and
                your actions happen in accordance with that."
              </Text>
            </ListItem>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
});
