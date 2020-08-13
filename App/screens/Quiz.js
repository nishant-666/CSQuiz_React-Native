import React from "react";
import Toast from "react-native-custom-toast";
import { View, StyleSheet, StatusBar, Text, Vibration } from "react-native";
import * as Font from "expo-font";

import { Button, ButtonContainer } from "../components/Button";

let customFonts = {
  Sacramento: require("../assets/fonts/Sacramento-Regular.ttf"),
  Karla: require("../assets/fonts/Karla-Regular.ttf"),
  Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
};

const styles = StyleSheet.create({
  container: {
    color: "black",
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 22,
    textAlign: "center",
    letterSpacing: -0.02,

    fontFamily: "Poppins",
    margin: 20,
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

  showRight() {
    this.refs.customToastRight.showToast("Correct Answer!", 1200);
  }
  showWrong() {
    this.refs.customToastWrong.showToast("Incorrect Answer!", 1200);
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this._loadFontsAsync();
  }

  state = {
    correctCount: 0,
    wrongCount: 0,
    totalCount: this.props.navigation.getParam("questions", []).length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
  };

  answer = (correct) => {
    const DURATION = 700;

    this.setState(
      (state) => {
        const nextState = { answered: true };

        if (correct) {
          this.showRight();
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          this.showWrong();
          nextState.answerCorrect = false;
          nextState.wrongCount = state.wrongCount + 1;
          Vibration.vibrate(DURATION);
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      }
    );
  };

  nextQuestion = () => {
    this.setState((state) => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        return this.props.navigation.navigate("RightAnswers");
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false,
      };
    });
  };

  render() {
    const questions = this.props.navigation.getParam("questions", []);
    const question = questions[this.state.activeQuestionIndex];

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.navigation.getParam("color") },
        ]}
      >
        <Toast
          ref="customToastRight"
          backgroundColor="#4caf50"
          position="bottom"
        />
        <Toast
          ref="customToastWrong"
          backgroundColor="#f44336"
          position="bottom"
        />
        <View
          style={{
            height: 70,
            paddingTop: 30,
            marginTop: 20,
            justifyContent: "center",
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
            CS Quiz!
          </Text>
        </View>
        <StatusBar style="dark" />

        <View>
          <Text style={styles.text}>{question.question}</Text>

          <ButtonContainer>
            {question.answers.map((answer) => (
              <Button
                style={{ backgroundColor: "black" }}
                key={answer.id}
                text={answer.text}
                onPress={() => this.answer(answer.correct)}
              />
            ))}
          </ButtonContainer>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.text}>
            Right Answers:&nbsp;&nbsp;
            {`${this.state.correctCount}`}
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 22,
              textAlign: "center",
              letterSpacing: -0.02,

              fontFamily: "Poppins",
            }}
          >
            Wrong Answers:&nbsp;&nbsp;
            {`${this.state.wrongCount}`}
          </Text>
        </View>
      </View>
    );
  }
}

export default Quiz;
