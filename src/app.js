import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let contain = document.querySelector("#contain")

  let divs = `  
  <div id="cardGenerate">
  <div id="symbolTop"></div>
  <div id="value"></div>
  <div id="symbolBottom"></div>
  </div>`
  contain.innerHTML = divs

  let cardGenerate = document.querySelector("#cardGenerate")
  cardGenerate.classList.add("bg-white", "w-25")

  let value = document.querySelector("#value")
  value.classList.add("d-flex", "justify-content-center")

  let symbolTop = document.querySelector("#symbolTop")
  symbolTop.classList.add("d-flex", "justify-content-start")


  let symbolBottom = document.querySelector("#symbolBottom")
  symbolBottom.classList.add("d-flex", "align-self-end")




  let symbols = ["♦", "♥", "♠", "♣"]
  let numCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  function RandoElements(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  let random = `${RandoElements(symbols)} ${RandoElements(numCard)}`
  let valueElement = document.querySelector("#value")
  valueElement.innerText = RandoElements(numCard)

  let symbol = RandoElements(symbols)

  let symbolElement1 = document.querySelector("#symbolTop")
  symbolElement1.innerText = symbol

  let symbolElement2 = document.querySelector("#symbolBottom")
  symbolElement2.innerText = symbol
  return random
};
