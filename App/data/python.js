const questions = [
  {
    question: "What is the output for −'ABCBACACBBCA' [100:200]?",
    answers: [
      {
        id: "1",
        text: "Index error.",
      },
      { id: "2", text: "' '", correct: true },
      { id: "3", text: "'ABCBACACBBCA'" },
      { id: "4", text: "Syntax error" },
    ],
  },
  {
    question: "Which operator is right-associative",
    answers: [
      {
        id: "1",
        text: "*",
      },
      {
        id: "2",
        text: "=",
        correct: true,
      },
      {
        id: "3",
        text: "+",
      },
      {
        id: "4",
        text: "%",
      },
    ],
  },
  {
    question:
      "What is output of following code: l = [1,2,6,5,7,8], l.insert(9)",
    answers: [
      {
        id: "1",
        text: "l=[9,1,2,6,5,7,8]",
      },
      {
        id: "2",
        text: "l=[1,2,6,5,9.7,8] (insert randomly at any position)",
      },
      {
        id: "3",
        text: "l=[1,2,6,5,7,8,9]",
      },
      {
        id: "4",
        text: "Type Error",
        correct: true,
      },
    ],
  },
  {
    question: "Which options are correct to create an empty set in Python?",
    answers: [
      {
        id: "1",
        text: "{}",
      },
      {
        id: "2",
        text: "()",
      },
      {
        id: "3",
        text: "[]",
      },
      {
        id: "4",
        text: "set()",
        correct: true,
      },
    ],
  },
  {
    question:
      "Select the correct option to draw a rectangle centred at 50,50 with width and height as 50, 70 respectively.",
    answers: [
      {
        id: "1",
        text: "Canvas.create_rect(50,50,50,70)",
      },
      {
        id: "2",
        text: "Canvas.create_rect(50,70,50,50)",
      },
      {
        id: "3",
        text: "Canvas.create_rectangle(50,50,50,70)",
        correct: true,
      },
      {
        id: "4",
        text: "Tkinter.create_rect(50,50,50,70)",
      },
    ],
  },

  {
    question: "print type(type(int))",
    answers: [
      {
        id: "1",
        text: "type 'int'",
      },
      {
        id: "2",
        text: "type 'type'",
      },
      {
        id: "3",
        text: "Error",
        correct: true,
      },
      {
        id: "4",
        text: "0",
      },
    ],
  },

  {
    question: "What is the output of the following segment : chr(ord('A'))",
    answers: [
      {
        id: "1",
        text: "A",
        correct: true,
      },
      {
        id: "2",
        text: "B",
      },
      {
        id: "3",
        text: "a",
      },
      {
        id: "4",
        text: "Error",
      },
    ],
  },

  {
    question: "Which of the following is the use of id() function in python?",
    answers: [
      {
        id: "1",
        text: "Id returns the identity of the object",
        correct: true,
      },
      {
        id: "2",
        text: "Every object doesn’t have a unique id",
      },
      {
        id: "3",
        text: "All of the mentioned",
      },
      {
        id: "4",
        text: "None of the mentioned",
      },
    ],
  },
  {
    question: "Which of the following is not a complex number?",
    answers: [
      {
        id: "1",
        text: "k = 2 + 3j",
      },
      {
        id: "2",
        text: "k = complex(2, 3)",
      },
      {
        id: "3",
        text: "k = 2 + 3l",
        correct: true,
      },
      {
        id: "4",
        text: "k = 2 + 3J",
      },
    ],
  },

  {
    question: "What does ~~~~~~5 evaluate to?",
    answers: [
      {
        id: "1",
        text: "+5",
        correct: true,
      },
      {
        id: "2",
        text: "-11",
      },
      {
        id: "3",
        text: "+11",
      },
      {
        id: "4",
        text: "-5",
      },
    ],
  },

  {
    question: "________ is a simple but incomplete version of a function.",
    answers: [
      {
        id: "1",
        text: "Stub",
        correct: true,
      },
      {
        id: "2",
        text: "Function",
      },
      {
        id: "3",
        text: "A function developed using bottom-up approach",
      },
      {
        id: "4",
        text: "A function developed using top-down approach",
      },
    ],
  },

  {
    question: "Which of the following is correct about Python?",
    answers: [
      {
        id: "1",
        text: "It supports automatic garbage collection.",
      },
      {
        id: "2",
        text:
          "It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java",
      },
      {
        id: "3",
        text: "Both of the above",
        correct: true,
      },
      {
        id: "4",
        text: "None of the above",
      },
    ],
  },
];

export default questions;
