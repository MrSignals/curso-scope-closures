// Variables

var a; //declarando
var b = b; // declaracion y asignacion

b = "bb"; //reasignacion

var a = "aa"; //redeclaracion

//Global Scope --> Las variables que se declararon al inicio pasaran a ser variables globales

var fruit = "apple"; // Global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia";
  console.log(country);
}

countries();
console.log(country);
