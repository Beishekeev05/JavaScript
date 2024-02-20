// Задания 1
const num = 10;
if (num == 10) {
    console.log(`верно`)
} else {
    console.log(`не верно`);
}
// Задания 2
let companyKut = prompt('Выберите квартиру от 1 до 100!!!');

let batir = companyKut;

if (batir >= 1 && batir <= 20) {
    console.log('Сиздин батиринис биринчи подъездде');
} else if (batir >= 20 && batir <= 55) {
    console.log('Сиздин батиринис экинчи подъездде');
} else if (batir >= 56 && batir <= 100) {
    console.log('Сиздигн баатиринис учунчу подъездде');
} else {
    console.warn('Анчалык квартира жок !!!');
}

// Задания 3

let a = true;

if (a >= 0 && a <= 5)
    console.log(a);

    // Задания 4

const time = 17;

const name = 'Nursultan'

if (time >= 1 && time <= 6) {
    console.log(`Добрый вечер ${name}`);
}
else if (time >= 7 && time <= 10) {
    console.log(`Добрый утро ${name}`);
}
else if (time >= 11 && time <= 16) {
    console.log(`Добрый день ${name}`);
}
else if (time >= 17 && time <= 24) {
    console.log(`Добрый вечер ${name}`);
}

// Задания 5

const age = 66;

if (age >= 6 && age <= 65) {
    console.log('Сизге скидка жок');
} else {
    console.log(`Сиздин скидканыс 65%`)
}

// Задания 6

let randomizer = Math.random()

if (randomizer <= 1 && randomizer >= 2 / 3) {
    console.log(`Орел`);
} else {
    console.log(`Решка`)
}

// Задания 7

const number = 7;

if (number % 2 === 1) {
    console.log('Число чётное');
} else {
    console.log('Число нечётное');
}
// Задания 8

let nums = 5;

nums == 5 ? console.log("Five") : console.log("Not five");

// Все закончил !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!