const questions = [
  {
    question: "What is the default value of long variable?",
    answers: [
      {
        id: "1",
        text: "0",
      },
      { id: "2", text: "0.0" },
      { id: "3", text: "0L", correct: true },
      { id: "4", text: "not defined" },
    ],
  },
  {
    question: "What is TreeSet Interface?",
    answers: [
      {
        id: "1",
        text:
          "It is a Set implemented when we want elements in a tree based order.",
      },
      {
        id: "2",
        text:
          "It is a Set implemented when we want elements in a sorted order.",
        correct: true,
      },
      {
        id: "3",
        text:
          "It is a Set implemented when we want elements in a binary tree format.",
      },
      {
        id: "4",
        text:
          "It is a Set implemented when we want elements in a hiearchical order.",
      },
    ],
  },
  {
    question: "What happens when thread's sleep() method is called?",
    answers: [
      {
        id: "1",
        text: "Thread returns to the ready state.",
      },
      {
        id: "2",
        text: "Thread returns to the waiting state.",
        correct: true,
      },
      {
        id: "3",
        text: "Thread starts running.",
      },
      {
        id: "4",
        text: "None of the above",
      },
    ],
  },
  {
    question:
      "Which of the following is Faster, StringBuilder or StringBuffer?",
    answers: [
      {
        id: "1",
        text: "StringBuilder",
        correct: true,
      },
      {
        id: "2",
        text: "StringBuffer",
      },
      {
        id: "3",
        text: "Both of the above.",
      },
      {
        id: "4",
        text: "None of the above.",
      },
    ],
  },
  {
    question: "What is function overriding?",
    answers: [
      {
        id: "1",
        text:
          "If a subclass uses a method that is already provided by its parent class, it is known as Method Overriding.",
      },
      {
        id: "2",
        text:
          "If a subclass provides a specific implementation of a method that is already provided by its parent class, it is known as Method Overriding.",
        correct: true,
      },
      {
        id: "3",
        text: "Both of the above.",
      },
      {
        id: "4",
        text: "None of the above.",
      },
    ],
  },

  {
    question:
      "Which of the following statements is/are TRUE regarding JAVA ? (a) Constants that cannot be changed are declared using the ‘static’ keyword. (b) A class can only inherit one class but can implement multiple interfaces.",
    answers: [
      {
        id: "1",
        text: "Only (a) is TRUE.",
      },
      {
        id: "2",
        text: "Only (b) is TRUE.",
        correct: true,
      },
      {
        id: "3",
        text: "Both (a) and (b) are TRUE.",
      },
      {
        id: "4",
        text: "Neither (a) nor (b) are TRUE.",
      },
    ],
  },

  {
    question: "Which of the following is/are advantages of packages?",
    answers: [
      {
        id: "1",
        text: "Packages avoid name clashes",
      },
      {
        id: "2",
        text:
          "Classes, even though they are visible outside their package, can have fields visible to packages only",
      },
      {
        id: "3",
        text:
          "We can have hidden classes that are used by the packages, but not visible outside.",
      },
      {
        id: "4",
        text: "All of the above",
        correct: true,
      },
    ],
  },

  {
    question:
      "Which of the following statement(s) is/are TRUE regarding Java Servelets ? (a) A Java Servlet is a server-side component that runs on the web server and extends the capabilities of a server. (b) A Servlet can use the user interface classes like AWT or Swing.",
    answers: [
      {
        id: "1",
        text: "Only (a) is TRUE.",
      },
      {
        id: "2",
        text: "Only (b) is TRUE.",
      },
      {
        id: "3",
        text: "Both (a) and (b) are TRUE.",
      },
      {
        id: "4",
        text: "Neither (a) nor (b) is TRUE.",
        correct: true,
      },
    ],
  },
];

export default questions;
