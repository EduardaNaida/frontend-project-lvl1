#!/usr/bin/env node
import game from "../src/index.js";


const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';


const exp = () => {
    let result = 0;
    let n1 = Math.floor(Math.random() * (100)) + 1;

    const expression = `${n1}`;

    for (let i = 2; i <= n1; i += 1){
        for (let j = 2; j <i; j += 1){
            if (i % j == 0){
                result = 'no';
            };
        }
        result = 'yes';
    }
    return [expression, result];
}

game(question, exp);