#! /usr/bin/env node
import inquirer from "inquirer";

//printing a wellcome message
console.log("/n/wellcom to /'codewithayaz/' -CLI simple calculator/n");

//Asking Questions from user through inquirer

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "percentage",
    ],
  },
]);
console.log(answer);

//conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "percentage") {
  console.log(answer.firtNuber % answer.secondNumber);
} else {
  console.log(" please select valid operator");
}