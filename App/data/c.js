const questions = [
  {
    question:
      "Which of the following header file can be used to define the NULL macro?",
    answers: [
      {
        id: "1",
        text: "stdio.h, locale.h, stddef.h, stdlib.h, string.h",
        correct: true,
      },
      { id: "2", text: "stddef.h, locale.h, math.h, stdlib.h, string.h" },
      { id: "3", text: "time.h, wchar.h, math.h, locale.h," },
      { id: "4", text: "math.h" },
    ],
  },
  {
    question:
      "Which of the following statement is correct for switch controlling expression?",
    answers: [
      {
        id: "1",
        text: "Only int can be used in “switch” control expression",
      },
      {
        id: "2",
        text: "Both int and char can be used in “switch” control expression",
        correct: true,
      },
      {
        id: "3",
        text:
          "All types i.e. int, char and float can be used in “switch” control expression",
      },
      { id: "4", text: "Switch control expression can be empty as well" },
    ],
  },
  {
    question:
      "In the context of modulo operation (i.e. remainder on division) for floating point (say 2.1 and 1.1), pick the best statement.",
    answers: [
      {
        id: "1",
        text:
          "For floating point, modulo operation isn't defined and that's why modulo can't be found.",
      },
      {
        id: "2",
        text: "(2.1 % 1.1) is the result of modulo operation",
      },
      {
        id: "3",
        text: "fmod(2.1,1.1) is the result of module operation",
        correct: true,
      },
      {
        id: "4",
        text: "((int)2.1) % ((int)1.1) is the result of modulo operation",
      },
    ],
  },
  {
    question:
      "In the context of Break and Continue statements in C, pick the best statement.",
    answers: [
      {
        id: "1",
        text: "“Break” can be used in “For”, “While” and “Do-while” loop body",
      },
      {
        id: "2",
        text:
          "“Continue” can be used in “For”, “While” and “Do-while” loop body",
      },
      {
        id: "3",
        text:
          "“Break” and “Continue” can be used in “For”, “While”, “Do-while” loop body and “Switch” body",
      },
      {
        id: "4",
        text:
          "“Break” and “Continue” can be used in “For”, “While” and “Do-while” loop body. But only “Break” can be used in “Switch” body.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of the following is correct with respect to “Jump Statements” in C?",
    answers: [
      {
        id: "1",
        text: "Goto",
      },
      {
        id: "2",
        text: "Continue",
      },
      {
        id: "3",
        text: "Break",
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
      "Suppose that in a C program snippet, followings statements are used: 1)sizeof(int), 2)sizeof(int*), 3)sizeof(int**). Assuming size of pointer is 4 bytes and size of int is also 4 bytes, pick the most correct answer from the given options.",
    answers: [
      {
        id: "1",
        text:
          "Only 1) would compile successfully and it would return size as 4",
      },
      {
        id: "2",
        text:
          "1), 2) and 3) would compile successfully and size of each would be same i.e. 4",
        correct: true,
      },
      {
        id: "3",
        text:
          "1), 2) and 3) would compile successfully but the size of each would be different and would be decided at run time.",
      },
      {
        id: "4",
        text:
          "2) and 3) would result in compile error but i) would compile and result in size as 4.",
      },
    ],
  },
  {
    question:
      "Let x be an integer which can take a value of 0 or 1. The statement if(x = =0) x = 1; else x = 0; is equivalent to which one of the following?",
    answers: [
      {
        id: "1",
        text: "x = 1 + x;",
      },
      {
        id: "2",
        text: "x = 1 - x;",
        correct: true,
      },
      {
        id: "3",
        text: "x = x - 1;",
      },
      {
        id: "4",
        text: "x = 1 % x;",
      },
    ],
  },

  {
    question:
      "A program attempts to generate as many permutations as possible of the string, 'abcd' by pushing the characters a, b, c, d in the same order onto a stack, but it may pop off the top character at any time. Which one of the following strings CANNOT be generated using this program?",
    answers: [
      {
        id: "1",
        text: "abcd",
        correct: true,
      },
      {
        id: "2",
        text: "dcba",
      },
      {
        id: "3",
        text: "cbad",
      },
      {
        id: "4",
        text: "cabd",
      },
    ],
  },

  {
    question:
      "Which of the following functions from “stdio.h” can be used in place of printf()?",
    answers: [
      {
        id: "1",
        text: "fputs() with FILE stream as stdout.",
      },
      {
        id: "2",
        text: "fprintf() with FILE stream as stdout.",
        correct: true,
      },
      {
        id: "3",
        text: "fwrite() with FILE stream as stdout.",
      },
      {
        id: "4",
        text: "All of the above three - a, b and c.",
      },
    ],
  },
  {
    question:
      "“Typedef” in C basically works as an alias. Which of the following is correct for “typedef”?",
    answers: [
      {
        id: "1",
        text:
          "typedef can be used to alias compound data types such as struct and union.",
      },
      {
        id: "2",
        text:
          "Typedef can be used to alias both compound data types and pointer to these compound types.",
      },
      {
        id: "3",
        text: "typedef can be used to alias a function pointer.",
      },
      {
        id: "4",
        text: "All of the above.",
        correct: true,
      },
    ],
  },
];

export default questions;
