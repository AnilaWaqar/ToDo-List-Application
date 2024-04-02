#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;

  console.log(chalk.magenta.bold("\n \t Wellcome To Anila Waqar - ToDo List Application\n"));

while (condition) {
  let addTask = await inquirer.prompt(

    [
    {
      name: "task",
      type: "input",
      message: chalk.red("What you want to add in your Todos?"),
    },

]);

 todos.push(addTask.task);
 console.log(chalk.green(`${addTask.task} Task added in todos List Successfully`));

 let addMoreTask = await inquirer.prompt(

    [
    {
      name: "AddMore",
      type: "confirm",
      message: chalk.blue("Do you want to addMore in your Todos?"),
      default: "False"
    },

]);
condition = addMoreTask.AddMore

}
console.log(chalk.yellow("Your Updated Todos List:" ,) , todos);

