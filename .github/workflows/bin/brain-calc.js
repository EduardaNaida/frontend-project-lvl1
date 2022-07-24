#!/usr/bin/env node
import game from "../src/index.js";

const question = "What is the result of the expression?";
  
const exp = () => {
    let result = 0;
    let n1 = Math.floor(Math.random() * (100)) + 1;
    let n2 = Math.floor(Math.random() * (100)) + 1;

    const operations = ['+', '-', '*'];
    const operationsRandom = operations[Math.floor(Math.random() * 2)];

    const expression = `${n1} ${operationsRandom} ${n2}`;

    if (operationsRandom === '+'){
        result = n1 + n2;
    }
    else if (operationsRandom === '-'){
        result = n1 - n2;
    }
    else if (operationsRandom === '*'){
        result = n1 * n2;
    }

    return [expression, result]
    }
game(question, exp);