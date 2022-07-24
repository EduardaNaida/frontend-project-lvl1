import readlineSync from 'readline-sync';
import { name } from "../src/cli.js";


    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let n = Math.floor(Math.random() * (100)) + 1;

    console.log('Question: ' + n);
    const answer = readlineSync.question('Question: ');

    if( n % 2 === 0 && answer === 'yes') {
        console.log('Correct!');
        console.log(`Congratulations, ${name}!`);
    }
    else if (n % 2 !== 0 && answer === 'no') {
        console.log('Correct!');
        console.log(`Congratulations, ${name}!`);
    }
    else {
        const opposite = (answer === 'yes' ? 'no' : 'yes');
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${opposite}".\nLet's try again, ${name} !`);
    }




