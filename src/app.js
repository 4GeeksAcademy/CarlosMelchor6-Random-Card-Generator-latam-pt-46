import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let symbols = ["♦", "♥", "♠", "♣"]
  let numCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  function RandoElements(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  let random = `${RandoElements(symbols)} ${RandoElements(numCard)}`
  let valueElement = document.querySelector("#value")
  valueElement.innerText = RandoElements(numCard)

  let symbol = RandoElements (symbols)

  let symbolElement1 = document.querySelector("#symbolTop")
  symbolElement1.innerText = symbol

  let symbolElement2 = document.querySelector("#symbolBottom")
  symbolElement2.innerText = symbol  

  return random
};
