import readlineSync from 'readline-sync';

const game = (question, expression) => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');

    console.log("Hello, " + name + "!");

    console.log(question); //Вопрос

    for (let i = 0; i < 3; i += 1) {
        const expressionAndResult = expression();

        console.log('Question: ', expressionAndResult[0]);
        const answer = readlineSync.question('Your answer: ');
        
        const rightAnswer = expressionAndResult[1].toString();

        if (answer === rightAnswer){
            console.log('Correct!');
            console.log(`Congratulations, ${name}!`);
        }
        else {
            console.log('Question: ', expressionAndResult[0]);
            console.log('Your answer: ', answer);
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${name}!`);
        }
    }
};

export default game;