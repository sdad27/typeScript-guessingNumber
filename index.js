#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "guessedNumber",
        message: "guess the number between 1-10",
    }
]);
if (answer.guessedNumber === randomNumber) {
    console.log("you guess the right number");
}
else {
    console.log("you guess the wrong number");
}
