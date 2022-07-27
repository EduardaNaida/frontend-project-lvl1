#!/usr/bin/env node
import game from "../src/index.js";


const question = "What number is missing in the progression?";

const length = 10;

const exp = () => {
    const result = [];
    const start = generateRandomNumber(1, 100);
    const stop = generateRandomNumber(1, 10);

    for (let i = 0; i <= length; i++){
        const value = start + stop * i;
        result.push(value);
    }

    const hidden = generateRandomNumber(1, length);

    const answer = String(result[hidden]);
    result[hidden] = '..';

    const question = `${result.join(' ')}`;

    return [question, answer];
};


const generateRandomNumber = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
  };


game(question, exp);