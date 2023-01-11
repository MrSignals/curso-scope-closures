// Block scope se agrega en el ECMS 6, por lo tanto let y const son block scope y el var se quedo como function scope

function fruits() {
  if (true) {
    var fruit1 = "Manzana"; //function scope
    let fruit2 = "Kiwi"; // block scope
    const fruit3 = "Banana"; //block scope
    console.log(fruit2);
    console.log(fruit3);
  }

  console.log(fruit1);
}

fruits();
