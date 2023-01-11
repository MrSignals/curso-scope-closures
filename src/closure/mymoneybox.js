/* function moneyBox(coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
}
moneyBox(5);
moneyBox(10); */

function moneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(19);
myMoneyBox(20);

const moneyBoxJosue = moneyBox();
moneyBoxJosue(10);
moneyBoxJosue(20);

function createPetList() {
  const arrayPets = [];
  function addPets(pets) {
    if (pets) {
      arrayPets.push(pets);
      console.log(arrayPets);
    }
  }
  return addPets;
}

const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();
