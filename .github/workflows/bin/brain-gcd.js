#!/usr/bin/env node
import game from "../src/index.js";

const question = "Find the greatest common divisor of given numbers.";

const exp = () => {
    let result = 0;

    let n1 = Math.floor(Math.random() * (100)) + 1;
    let n2 = Math.floor(Math.random() * (100)) + 1;

    const expression = `${n1} ${n2}`;

    while(n2) {
        var t = n2;
        n2 = n1 % n2;
        n1 = t;
        result = n1;
    }
    return [expression, result];
}

game(question, exp);