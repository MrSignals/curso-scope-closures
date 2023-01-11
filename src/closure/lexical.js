// Permite acceder al ámbito de una funcion exterior desde una funcion interior, se crean cada vez que una funcion es creada, no siempre se utilizan
const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    // funcion interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}

myFunction();

function sumWithClosure(firstNum) {
  return function sum(secondNum = 0) {
    return firstNum + secondNum;
  };
}
console.log(sumWithClosure(5)(6));
