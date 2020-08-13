const questions = [
  {
    question: "Choose the operator which cannot be overloaded.",
    answers: [
      {
        id: "1",
        text: " /",
      },
      { id: "2", text: "()" },
      { id: "3", text: "::", correct: true },
      { id: "4", text: "%" },
    ],
  },
  {
    question: "By default the members of the structure are",
    answers: [
      {
        id: "1",
        text: "private",
      },
      {
        id: "2",
        text: "protected",
      },
      {
        id: "3",
        text: "public",
        correct: true,
      },
      { id: "4", text: "Access specifiers not applicable for structures." },
    ],
  },
  {
    question: "HAS-A relationship between the classes is shown through.",
    answers: [
      {
        id: "1",
        text: "Inheritance",
      },
      {
        id: "2",
        text: "Container classes",
        correct: true,
      },
      {
        id: "3",
        text: "Polymorphism",
      },
      {
        id: "4",
        text: "None of the above",
      },
    ],
  },
  {
    question: "Which of the following is true?",
    answers: [
      {
        id: "1",
        text: "Static methods cannot be overloaded",
      },
      {
        id: "2",
        text: "Static data members can only be accessed by static methods",
      },
      {
        id: "3",
        text: "Non-static data members can be accessed by static methods",
      },
      {
        id: "4",
        text:
          "Static methods can only access static members (data and methods)",
        correct: true,
      },
    ],
  },

  {
    question:
      "Which of the followings is/are automatically added to every class, if we do not write our own.",
    answers: [
      {
        id: "1",
        text: "Copy Constructor",
      },
      {
        id: "2",
        text: "Assignment Operator",
      },
      {
        id: "3",
        text: "A constructor without any parameter",
      },
      {
        id: "4",
        text: "All of the above",
        correct: true,
      },
    ],
  },

  {
    question: "Which of the following is FALSE about references in C++",
    answers: [
      {
        id: "1",
        text: "References cannot be NULL",
      },
      {
        id: "2",
        text: "A reference must be initialized when declared",
      },
      {
        id: "3",
        text:
          "Once a reference is created, it cannot be later made to reference another object; it cannot be reset.",
      },
      {
        id: "4",
        text: "References cannot refer to constant value",
        correct: true,
      },
    ],
  },

  {
    question: "Which of the following is FALSE about references in C++",
    answers: [
      {
        id: "1",
        text: "References cannot be NULL",
      },
      {
        id: "2",
        text: "A reference must be initialized when declared",
      },
      {
        id: "3",
        text:
          "Once a reference is created, it cannot be later made to reference another object; it cannot be reset.",
      },
      {
        id: "4",
        text: "References cannot refer to constant value",
        correct: true,
      },
    ],
  },

  {
    question: "Which of the following functions must use reference.",
    answers: [
      {
        id: "1",
        text: "Assignment operator function",
      },
      {
        id: "2",
        text: "Copy Constructor",
        correct: true,
      },
      {
        id: "3",
        text: "Destructor",
      },
      {
        id: "4",
        text: "Parameterized constructor",
      },
    ],
  },

  {
    question: "What is the use of this pointer?",
    answers: [
      {
        id: "1",
        text:
          "When local variable’s name is same as member’s name, we can access member using this pointer.",
      },
      {
        id: "2",
        text: "To return reference to the calling object",
      },
      {
        id: "3",
        text: "Can be used for chained function calls on an object",
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
      "What happens when delete is used for a NULL pointer? int *ptr = NULL; delete ptr; ",
    answers: [
      {
        id: "1",
        text: "Compiler Error",
      },
      {
        id: "2",
        text: "Run-time Crash",
      },
      {
        id: "3",
        text: "No Effect",
        correct: true,
      },
      {
        id: "4",
        text: "None",
      },
    ],
  },

  {
    question:
      "How can we restrict dynamic allocation of objects of a class using new?",
    answers: [
      {
        id: "1",
        text: "By overloading new operator",
      },
      {
        id: "2",
        text: "By making an empty private new operator.",
      },
      {
        id: "3",
        text: "By making an empty private new and new[] operators",
        correct: true,
      },
      {
        id: "4",
        text: "By overloading new operator and new[] operators",
      },
    ],
  },
];

export default questions;
