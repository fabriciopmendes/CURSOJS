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

// switch
const car = 'Mercedes'
switch (car) {
    case 'Mercedes':
        console.log('Mercedes is beautiful');
        break;
    case 'Ferrari':
        console.log('Ferrari is very red');
        break;
    case 'Tesla':
        console.log('Tesla is smart');
        break;
}

//Falsy
const x = '';
const y = 0;
const a = null;
const b = undefined;
console.log(!!x);
console.log(!!y);
console.log(!!a);
console.log(!!ab;
if (x) {
    console.log(x);
}
//Truthy
const list = [];
const object = {};
console.log(!list) //invertido booleano
console.log(!!object) //checa true ou false

if (list.length === 0) {
    console.log(list)
}

//Functions e Arrow Functions
function sum(a, b) {
    console.log(a + b);
}
sum(2, 10);
function sum(a, b) {
    return a + b;
}
const sumValue = sum(2, 2)
console.log(sumValue);
function sum(a, b = 10) {
    return a + b;
}
const sumArrow = (a, b = 10) => a + b;
const sumArrowValue = sumArrow(2)
const sumValue = sum(2)
console.log(sumValue);
console.log(sumArrowValue);

// Programação Orientada a Objetos (POO)
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    static speak() {
        console.log('Hello world!');
    }
}
const person = new Person('Jane', 'Doe', 40);
console.log(person);
console.log(person.getFullName());
Person.speak();
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} made some noise!`)
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(`${this.name} barked!`)
    }
}
const animal = new Animal('Simba');
const dog = new Dog('Bob');
animal.speak();
dog.speak();

// Selecionar apenas um elemento
const addUserText = document.getElementById("add-user");
addUserText.innerText = 'Adicionar usuário'
const addUserText = document.querySelector("#add-user")
addUserText.textContent = 'Adicionar usuário'
const myForm = document.querySelector(".item")
// Selecionar múltiplos elementos
const allItems = document.querySelectorAll(".item")
console.log(allItems[1])
const allItems = document.getElementsByClassName('item')
const allItems = document.getElementsByTagName('li')
// Alterar elementos
const items = document.querySelector('.items');
items.firstElementChild.remove();
items.lastElementChild.remove();
items.children[0].textContent = 'Item Um';
items.lastElementChild.innerHTML = '<h1>Hello world!</h1>'
const button = document.querySelector('.btn');
button.style.background = 'red';
const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const items = document.querySelector('.items');
const body = document.querySelector('body');
submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "" || emailValue === '') {
        return alert("Please fill out all the fields!")
    }
    myForm.style.background = 'red';
    items.firstElementChild.textContent = nameValue;
    items.children[1].textContent = emailValue;
    body.style.background = 'white'
})
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const submitButton = document.querySelector('#submit-button')

const errorMessage = document.querySelector('.msg')

const items = document.querySelector('.items')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === '') {
        errorMessage.textContent = "Please fill out the fields!"
        errorMessage.classList = 'error';

        setTimeout(() => {
            errorMessage.textContent = '';
            errorMessage.classList = '';
    }, 3000);
        return;
    }

    const li = document.createElement('li');
    li.classList = 'item';
    li.innerHTML = `Nome: ${nameValue}<br />Email: ${emailValue}`

    items.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
})
//Proximos passos
Praticar
Promises, Async/await
Framework fron-end, Ex: React
TypeScript

//Callbacks
const loginUser = (email, password, onSucess, onError) => {
    setTimeout(() => {
        const error = true;

        if (error) {
            return onError(new Error('error in login!'))
        }

        console.log('user logged!');
        onSucess ({email});
    }, 1500);

    console.log('after setTimeout');
}

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 2000);
}

const getVideoDetails = (video, callback) => {
    setTimeout(() => {
        callback({title: 'video title'});
    }, 2500);
}

const user = loginUser(
    'felipe@gmail.com',
    '123456', 
    (user) => {
        getUserVideos(user.email, (videos) => {
            console.log({videos});
            getVideoDetails(videos[0], (videoDetails) => {
                console.log({videoDetails});
            })
        })
    },
    (error) => {
        console.log({error});
    }
);