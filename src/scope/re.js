var firstName; // Undefined
firstName = "Josue";
console.log(firstName);

var lastName = "Antonio"; // Declaracion y asignacion
lastName = "Pepe"; // Reasignar
console.log(lastName);

var secondName = "Wilmer"; // Declarando y asignando
var secondName = "David"; // Reasignando
console.log(secondName);

// Let

let fruit = "Apple"; // Declaracion y asignacion
fruit = "Pera"; // Reasignacion
console.log(fruit);

/* let fruit = "Banana"; // El let no se puede Redeclarar */

// Const

const animal = "Dog";
/* animal = "Cat"; */
/* const animal = "Cat"; */ // No se puede ni reasignar ni reedeclarada
console.log(animal);

const vehicles = [];

vehicles.push("Ford");
console.log(vehicles);
vehicles.pop();
console.log(vehicles);
