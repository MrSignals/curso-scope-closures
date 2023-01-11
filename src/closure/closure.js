function greeting() {
  let userName = "Josue";
  function displayUserName() {
    return `Hello ${userName}!`;
  }
  return displayUserName();
}
const g = greeting();

console.log(g);
