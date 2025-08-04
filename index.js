import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const questions = [
    {
        question: "What does 'npm' stand for?",
        answer: "Node Package Manager",
    },
    {
        question: "Which command initializes a package.json file?",
        answer: "npm init",
    },
    {
        question: "What keyword is used to export a function in ES Modules?",
        answer: "export",
    },
];

let score = 0;

let current = 0;

function askQuestion() {
    if (current < questions.length) {
        rl.question(chalk.cyan(questions[current].question + " "), (userInput) => {
            if (userInput.trim().toLowerCase() === questions[current].answer.toLowerCase()) {
                console.log(chalk.green("Correct!"));
                score++;
            } else {
                console.log(chalk.red("Incorrect."));
                console.log("Correct answer:", chalk.yellow(questions[current].answer));
            }
            current++;
            askQuestion();
        });
    } else {
        console.log(chalk.magenta(`Quiz complete! Your score is ${score} / ${questions.length}`));
        rl.close();
    }
}

console.log(chalk.blue.bold("Welcome to the Node.js CLI Quiz!"));
askQuestion();