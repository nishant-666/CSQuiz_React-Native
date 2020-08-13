const questions = [
  {
    question: "What is returned by ROUND(789.8389, 2)?",
    answers: [
      {
        id: "1",
        text: "789.84",
        correct: true,
      },
      { id: "2", text: "789.83" },
      { id: "3", text: "78" },
      { id: "4", text: "789.00" },
    ],
  },
  {
    question: "Which of the following is not true about the COALESCE function?",
    answers: [
      {
        id: "1",
        text: "It takes multiple alternate values.",
      },
      {
        id: "2",
        text: "It returns the first non-null expression in the parameter list.",
      },
      {
        id: "3",
        text: "It returns the first value in the parameter list if it is null.",
        correct: true,
      },
      {
        id: "4",
        text: "None of the above.",
      },
    ],
  },
  {
    question: "Which of the following is not true about a subquery?",
    answers: [
      {
        id: "1",
        text:
          "A subquery is a SELECT statement embedded in a clause of another SELECT statement.",
      },
      {
        id: "2",
        text: "The subquery executes before the main query.",
      },
      {
        id: "3",
        text: "The result of the main query is returned to the subquery.",
        correct: true,
      },
      {
        id: "4",
        text: "All of the above.",
      },
    ],
  },
  {
    question:
      " Consider the following schema − LOCATIONS(subject_code, department_name, location_id, city). Which code snippet will alter the table LOCATIONS and delete the column named CITY? ",
    answers: [
      {
        id: "1",
        text: "MODIFY TABLE locations DROP (city varchar2(30));",
      },
      {
        id: "2",
        text: "ALTER TABLE locations DROP COLUMN city;",
        correct: true,
      },
      {
        id: "3",
        text: "ALTER TABLE locations DROP (city);",
      },
      {
        id: "4",
        text: "None of the above.",
      },
    ],
  },
  {
    question:
      "Which of the following statements allows William to change his database user account password to bill?",
    answers: [
      {
        id: "1",
        text: "create user william identified by bill;",
      },
      {
        id: "2",
        text: "alter user william identified by bill",
      },
      {
        id: "3",
        text: "create user william password bill;",
        correct: true,
      },
      {
        id: "4",
        text: "alter user william password bill;",
      },
    ],
  },

  {
    question: "What is returned by SUBSTR(‘TUTORIALS POINT’, -1, 1)?",
    answers: [
      {
        id: "1",
        text: "T",
        correct: true,
      },
      {
        id: "2",
        text: "NULL",
      },
      {
        id: "3",
        text: "0",
      },
      {
        id: "4",
        text: "N",
      },
    ],
  },

  {
    question: "Which of the following is not true about Natural Joins?",
    answers: [
      {
        id: "1",
        text:
          "Natural join is based on all columns in two tables having same name",
      },
      {
        id: "2",
        text:
          "It selects rows from the two tables having different values in the matched columns.",
        correct: true,
      },
      {
        id: "3",
        text:
          "If columns having same names have different data types, it returns error.",
      },
      {
        id: "4",
        text: "None of the above.",
      },
    ],
  },

  {
    question:
      "You want to calculate the sum of commissions earned by the employees of an organisation. If an employee doesn’t receive any commission, it should be calculated as zero. Which will be the right query to achieve this?",
    answers: [
      {
        id: "1",
        text: "select sum(nvl(commission, 0)) from employees;",
        correct: true,
      },
      {
        id: "2",
        text: "select sum(commission, 0) from employees;",
      },
      {
        id: "3",
        text: "select nvl(sum(commission), 0) from employees;",
      },
      {
        id: "4",
        text: "None of the above.",
      },
    ],
  },

  {
    question:
      "Which of the following is true about deleting a table from the database?",
    answers: [
      {
        id: "1",
        text: "All the data in the table are deleted",
      },
      {
        id: "2",
        text: "The table structure is removed",
      },
      {
        id: "3",
        text: "The indexes in the table are deleted",
      },
      {
        id: "4",
        text: "All of the above.",
        correct: true,
      },
    ],
  },

  {
    question:
      "Which of the following code would create a role named student_admin?",
    answers: [
      {
        id: "1",
        text: "CREATE student_admin;",
      },
      {
        id: "2",
        text: "GRANT student_admin;",
      },
      {
        id: "3",
        text: "CREATE ROLE student_admin;",
        correct: true,
      },
      {
        id: "4",
        text: "ROLE student_admin;",
      },
    ],
  },
];

export default questions;
