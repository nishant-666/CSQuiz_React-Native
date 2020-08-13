const questions = [
  {
    question:
      "Which of the following is true about cookie handling in JavaScript?",
    answers: [
      {
        id: "1",
        text:
          "JavaScript can manipulate cookies using the cookie property of the Document object.",
      },
      {
        id: "2",
        text:
          "JavaScript can read, create, modify, and delete the cookie or cookies that apply to the current web page.",
      },
      { id: "3", text: "Both of the above.", correct: true },
      { id: "4", text: "None of the above." },
    ],
  },
  {
    question:
      "Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
    answers: [
      {
        id: "1",
        text: "toSource()",
        correct: true,
      },
      {
        id: "2",
        text: "valueOf()",
      },
      {
        id: "3",
        text: "toString()",
      },
      {
        id: "4",
        text: "None of the above.",
      },
    ],
  },
  {
    question:
      "Which of the following function of String object creates an HTML hypertext link that requests another URL?",
    answers: [
      {
        id: "1",
        text: "link()",
        correct: true,
      },
      {
        id: "2",
        text: "sub()",
      },
      {
        id: "3",
        text: "sup()",
      },
      {
        id: "4",
        text: "small()",
      },
    ],
  },
  {
    question:
      "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
    answers: [
      {
        id: "1",
        text: "unshift()",
      },
      {
        id: "2",
        text: "sort()",
      },
      {
        id: "3",
        text: "splice()",
      },
      {
        id: "4",
        text: "toString()",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of the following type of variable is visible only within a function where it is defined?",
    answers: [
      {
        id: "1",
        text: "global variable",
      },
      {
        id: "2",
        text: "local variable",
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
    question: "Which of the following is not a reserved word in JavaScript?",
    answers: [
      {
        id: "1",
        text: "interface",
      },
      {
        id: "2",
        text: "throws",
      },
      {
        id: "3",
        text: "program",
        correct: true,
      },
      {
        id: "4",
        text: "short",
      },
    ],
  },

  {
    question: "How is the function called in JavaScript?",
    answers: [
      {
        id: "1",
        text: "call ABC();",
      },
      {
        id: "2",
        text: "call function ABC(); ",
      },
      {
        id: "3",
        text: "ABC();",
        correct: true,
      },
      {
        id: "4",
        text: "function Geekfunc();",
      },
    ],
  },

  {
    question: "How to insert a multi-line comment in JavaScript?",
    answers: [
      {
        id: "1",
        text: "<!–This is comment line 1 This is comment line 2–&gt ",
      },
      {
        id: "2",
        text: "//This is comment line 1 This is comment line 2//",
      },
      {
        id: "3",
        text: "*This is comment line 1 This is comment line 2*/ ",
        correct: true,
      },
      {
        id: "4",
        text: "**This is comment line 1 This is comment line 2**",
      },
    ],
  },

  {
    question:
      "In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?",
    answers: [
      {
        id: "1",
        text: "Integer(value)",
      },
      {
        id: "2",
        text: "ifInteger(value)",
      },
      {
        id: "3",
        text: "isInteger(value)",
        correct: true,
      },
      {
        id: "4",
        text: "ifinteger(value)",
      },
    ],
  },

  {
    question: "Which of the following is an advantage of using JavaScript?",
    answers: [
      {
        id: "1",
        text: "Increased interactivity.",
      },
      {
        id: "2",
        text: "Less server interaction.",
      },
      {
        id: "3",
        text: "Immediate feedback from the users.",
      },
      {
        id: "4",
        text: "All of the above.",
        correct: true,
      },
    ],
  },

  {
    question: "Which of the following is an advantage of using JavaScript?",
    answers: [
      {
        id: "1",
        text: "Increased interactivity.",
      },
      {
        id: "2",
        text: "Less server interaction.",
      },
      {
        id: "3",
        text: "Immediate feedback from the users.",
      },
      {
        id: "4",
        text: "All of the above.",
        correct: true,
      },
    ],
  },

  {
    question: "JavaScript is a ________ Side Scripting Language.",
    answers: [
      {
        id: "1",
        text: "Server",
      },
      {
        id: "2",
        text: "ISP",
      },
      {
        id: "3",
        text: "Browser",
        correct: true,
      },
      {
        id: "4",
        text: "None of the above",
      },
    ],
  },

  {
    question: "Which was the first browser to support JavaScript?",
    answers: [
      {
        id: "1",
        text: "Mozilla Firefox",
      },
      {
        id: "2",
        text: "Netscape",
        correct: true,
      },
      {
        id: "3",
        text: "Google Chrome",
      },
      {
        id: "4",
        text: "IE",
      },
    ],
  },
];

export default questions;
