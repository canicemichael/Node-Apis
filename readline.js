// import * as readline from "node:readline/promises";
import readline from "node:readline";
import { de } from 'node:readline';
import { stdin as input, stdout as output } from "node:process";

// const rl = readline.createInterface({ input: process.stdin, output });

// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.on('line', (input) => {
//     console.log(`Received: ${input}`);
// });

// rl.close();

async function getUserInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await rl.question("What do you think of Node.js? ");

  rl.on("line", (input) => {
    console.log(`Received: ${input}`);
  });

  rl.on("history", (history) => {
    console.log(`History request: ${history}`);
  });

  rl.on("pause", () => {
    console.log("Readline paused.");
  });

  rl.on("resume", () => {
    console.log("Readline resumed.");
  });

  rl.prompt();
  rl.setPrompt("waters");
  rl.getPrompt();
}

// getUserInput();

async function runPrompt() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt("Enter a command: ");

  rl.prompt();

  rl.on("line", (input) => {
    console.log(`You entered: ${input}`);

    rl.setPrompt("Enter another command: ");

    rl.prompt();
  });
}

// runPrompt();

const values = ['lorem ipsum', 'dolor sit amet'];
const rl = readline.createInterface(process.stdin);
const showResults = debounce(() => {
  console.log(
    '\n',
    values.filter((val) => val.startsWith(rl.line)).join(' '),
  );
}, 300);
process.stdin.on('keypress', (c, k) => {
  showResults();
});
