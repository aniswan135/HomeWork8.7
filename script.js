let min = parseInt(prompt('Минимальное значение числа для игры','0')) || 0 ;
let minValue = (min < -999) ? -999  : min;
let max = parseInt(prompt('Максимальное значение числа для игры','100')) || 100 ;
let maxValue = (max > 999) ? 999 : max;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное значение числа для игры','0')) || 0;
    maxValue = parseInt(prompt('Максимальное значение числа для игры','100')) || 100;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    orderNumber = 1;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    gameRun = true;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            let answerPhrase;
            if (phraseRandom === 0) {
                answerPhrase = `Это какая-то ошибка !`;
            } else if (phraseRandom === 1) {
                answerPhrase = `Жульничаешь ?`;
            } else if (phraseRandom === 2) {
                answerPhrase = `Я сдаюсь...`;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue) {
            const phraseRandom = Math.round( Math.random()*2);
            let answerPhrase;
            if (phraseRandom === 0) {
                answerPhrase = `Жми заново, что-то не так`;
            } else if (phraseRandom === 1) {
                answerPhrase = `Давай по-новой!`;
            } else if (phraseRandom === 2) {
                answerPhrase = `Непонятно...`;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        let answerPhrase;
        if (phraseRandom === 0 ) {
            answerPhrase = `Ура!!!`; 
        } else if (phraseRandom === 1 ) {
            answerPhrase = `Это было легко`; 
        } else if (phraseRandom === 2) {
            answerPhrase = `Проще пареной репы`;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

