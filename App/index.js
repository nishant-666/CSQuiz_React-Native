import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";
import RightAnswers from "./screens/RightAnswers";
import Inspiration from "./screens/Inspiration";
const AuthStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      header: null,
    },
  },

  RightAnswers: {
    screen: RightAnswers,
    navigationOptions: {
      header: null,
    },
  },

  Quiz: {
    screen: Quiz,
    navigationOptions: {
      header: null,
    },
  },

  Inspiration: {
    screen: Inspiration,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
    },
    {
      initialRouteName: "Auth",
    }
  )
);
