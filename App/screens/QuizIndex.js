import React from "react";
import { ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Image from "../components/Image";
import c from "../data/c";
import cpp from "../data/cpp";
import java from "../data/java";
import python from "../data/python";
import javascript from "../data/javascript";
import sql from "../data/sql";
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

export default ({ navigation }) => (
  <View
    style={{
      backgroundColor: "white",
      alignItems: "center",

      flex: 1,
    }}
  >
    <View
      style={{
        height: 70,
        paddingTop: 30,
        marginTop: 20,

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
        Welcome to CS Quiz!
      </Text>
    </View>
    <StatusBar style="dark" />
    <Image />
    <View style={{ textAlign: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 20,
          marginTop: -40,
          fontFamily: "Karla",
          color: "#2196f3",
        }}
      >
        Choose a Programming Language and start the Quiz!
      </Text>
    </View>
    <View style={{ width: "100%", marginTop: 20 }}>
      <ListItem
        avatar
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "C Language",
            questions: c,
            color: "white",
          })
        }
      >
        <Left>
          <Thumbnail
            style={{ width: 40, height: 40 }}
            source={{
              uri:
                "https://www.pngitem.com/pimgs/m/31-312155_c-programming-language-logo-hd-png-download.png",
            }}
          />
        </Left>
        <Body>
          <Text style={{ fontSize: 16, fontFamily: "Poppins" }}>C</Text>
        </Body>
      </ListItem>

      <ListItem
        avatar
        onPress={() =>
          navigation.navigate("Quiz", {
            questions: cpp,
            color: "white",
          })
        }
      >
        <Left>
          <Thumbnail
            style={{ width: 40, height: 40 }}
            source={{
              uri:
                "https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png",
            }}
          />
        </Left>
        <Body>
          <Text style={{ fontSize: 16, fontFamily: "Poppins" }}>C++</Text>
        </Body>
      </ListItem>

      <ListItem
        avatar
        onPress={() =>
          navigation.navigate("Quiz", {
            questions: java,
            color: "white",
          })
        }
      >
        <Left>
          <Thumbnail
            style={{ width: 35, height: 35 }}
            source={{
              uri:
                "https://www.pngkey.com/png/detail/264-2646582_logo-transparent-background-java.png",
            }}
          />
        </Left>
        <Body>
          <Text style={{ fontSize: 16, fontFamily: "Poppins" }}>Java</Text>
        </Body>
      </ListItem>

      <ListItem
        avatar
        onPress={() =>
          navigation.navigate("Quiz", {
            questions: javascript,
            color: "white",
          })
        }
      >
        <Left>
          <Thumbnail
            style={{ width: 35, height: 35 }}
            source={{
              uri: "https://logodix.com/logo/374736.png",
            }}
          />
        </Left>
        <Body>
          <Text style={{ fontSize: 16, fontFamily: "Poppins" }}>
            JavaScript
          </Text>
        </Body>
      </ListItem>

      <ListItem
        avatar
        onPress={() =>
          navigation.navigate("Quiz", {
            questions: python,
            color: "white",
          })
        }
      >
        <Left>
          <Thumbnail
            style={{ width: 35, height: 35 }}
            source={{
              uri:
                "https://www.pngitem.com/pimgs/m/31-312064_programming-icon-png-python-logo-512-transparent-png.png",
            }}
          />
        </Left>
        <Body>
          <Text style={{ fontSize: 16, fontFamily: "Poppins" }}>Python</Text>
        </Body>
      </ListItem>

      <ListItem
        avatar
        onPress={() =>
          navigation.navigate("Quiz", {
            questions: sql,
            color: "white",
          })
        }
      >
        <Left>
          <Thumbnail
            style={{ width: 35, height: 35 }}
            source={{
              uri:
                "https://icons-for-free.com/iconfiles/png/512/logo+my+query+server+sql+icon-1320184811372606623.png",
            }}
          />
        </Left>
        <Body>
          <Text style={{ fontSize: 16, fontFamily: "Poppins" }}>SQL</Text>
        </Body>
      </ListItem>
    </View>
    <Text
      style={{
        fontSize: 18,
        fontFamily: "Poppins",
        marginTop: 25,
        fontStyle: "italic",
      }}
    >
      More Questions and Topics to be added soon..
    </Text>
  </View>
);
