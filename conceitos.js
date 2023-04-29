// Strings
const firstName = 'Fabricio';
const lastName = 'Mendes';
console.log('Meu nome é ' + firstName + ' ' + lastName);
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`);
const names = 'Fabricio, Felipe, Julia'
console.log(names.split(','))

// Numbers
const number = 5;
console.log(number.toString());
console.log(typeof number.toString())

// Booleanos = true ou false
console.log(2 == 2);
console.log(2 == 3);

// Null & Undefined
const x = null;
const y = undefined;

// Listas
const names  = ['Fabricio', 'João', 'Julia', 10, false];
const joao = names[1]
names.push('Pedro')
names.unshift('Fernada');
names.pop();
names[3] = 'Gustavo';
console.log(names);
const indexOfFabricio = names.indexOf('Fabricio');
const sortedNames = names.sort();
console.log(sortedNames);
const namesIsArray = Array.isArray(names);
console.log(namesIsArray);

// Modificar listas
const number = [1, 2, 3, 4, 5];
const numberMutipliedByTwo = number.map(function (number) {
    return number * 2;
});
console.log(numberMutipliedByTwo);
const age = [8, 13, 27, 30, 22, 40];
const evenAges = age.filter(function (age) {
    return age % 2 === 0;
});
console.log(evenAges)
const sumOfAges = age.reduce(function (age, accumulator) {
    return accumulator + age;
}, 0);
console.log(sumOfAges)

//Objetos dentro de objetos
const person = {
    firstName: 'Fabricio',
    lastName: 'Mendes',
    age: '33',
    hobbies: ['Assistir vídeos na internet', 'Jogar', 'Andar de moto']
};
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const hobbies = person.hobbies;
const play = person.hobbies[1];
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(play);
//destructuring
const {firstName: primeiroNome, lastName: ultimoNome, age: idade, hobbies} = person; 
console.log(primeiroNome);
console.log(ultimoNome);
console.log(idade);
console.log(hobbies);
person.dog = {name: 'Simba', age: 4};
console.log(person.dog.age);

//JSON
const todos = [
    {
        id: 1,
        description: 'Estudar Programação',
        isCompleted: false,
    },
    {
        id: 2,
        description: 'Ler',
        isCompleted: true,
    },
    {
        id: 3,
        description: 'Treinar',
        isCompleted: true,
    },
];
const descriptionOfLastTodo = todos[2].description;
console.log(descriptionOfLastTodo);
const todosJSON = JSON.stringify(todos);
const todosList = JSON.parse(todosJSON);

//Loops
const cars = ['Ferrari', 'Tesla', 'Mercedes'];
for (let index = 1; index < 10; index++) {    
console.log(index);
}
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
for (let car of cars) {
    console.log(car);
}
cars.forEach(function (car, index) {
    console.log(index);
    console.log(car);
});
let index = 0;
while (index < 10) {
    console.log('index é menor do que 10');
    index ++;
}
const person = {
    name: 'Jane',
    age: 21,
};
for (property in person) {
    console.log(person[property]);
}

// if else
const sum = 1 + 1;
if (sum === 2) {
    console.log('Sum is 2!');
} else if (sum === 3) {
    console.log('Sum is 3!');
} else {
    console.log('Sum is not 2!');
}
let number;
if (sum === 2) {
    number = 2;
} else {
    number = 4;
}
// Ternary Operator
let number = sum === 2 ? 2 : 4;
console.log(number);
// && ||
const sum1 = 2 + 2;
const sum2 = 3 + 10;

if (sum1 === 4 && sum2 === 6) {
    console.log('sum1 is 4 and sum2 is 6!');
}
if (sum1 === 4 && sum2 === 6) {
    console.log('sum1 is 4 and sum2 is 6!');
}