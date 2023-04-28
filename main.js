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