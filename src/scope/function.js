// function scope, las variables declaradas dentro de esta funcion van a hacer accesibles solo dentro de esta funcion y de las anidadas
function greeting() {
  let userName = "Josue";
  console.log(userName);

  if (userName === "Josue") {
    console.log(`Hello ${userName}!`);
  }
}

greeting();
console.log(userName);
