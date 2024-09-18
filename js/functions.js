'use strict';

let rand1, rand2, correct = 0, incorrect = 0;

const getRandomInt = () => Math.floor(Math.random() * 10) + 1;

const updateUI = () => {
    document.querySelector('#num1').textContent = rand1;
    document.querySelector('#num2').textContent = rand2;
    document.querySelector('#correct-count').textContent = correct;
    document.querySelector('#incorrect-count').textContent = incorrect;
};

const checkAnswer = () => {
    const isCorrect = (Number(document.querySelector('#user-answer').value) === rand1 + rand2);
    isCorrect ? correct++ : incorrect++;
    document.querySelector('#result-message').textContent = isCorrect ? "Correct!" : "Incorrect!";
    document.querySelector('#result-message').style.color = isCorrect ? "green" : "red";
    rand1 = getRandomInt();
    rand2 = getRandomInt();
    updateUI();
    document.querySelector('#user-answer').value = "";
};

document.addEventListener('DOMContentLoaded', () => {
    rand1 = getRandomInt();
    rand2 = getRandomInt();
    updateUI();
});

document.querySelector('button').addEventListener('click', checkAnswer);
document.querySelector('#user-answer').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkAnswer();
});