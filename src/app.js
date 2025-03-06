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
  cardGenerate.style.width = "25%"
  cardGenerate.style.height = "auto"
  cardGenerate.style.borderRadius = "20px"
  cardGenerate.classList.add("mx-auto", "bg-white", "mt-5")

  let symbolTop = document.querySelector("#symbolTop")
  symbolTop.style.fontSize = "130px"
  symbolTop.style.marginTop = "-1rem"
  symbolTop.style.marginLeft = "1rem"
  symbolTop.style.height = "auto"

  let value = document.querySelector("#value")
  value.style.fontSize = "150px"
  value.classList.add("d-flex", "justify-content-center", "align-items-center")

  let symbolBottom = document.querySelector("#symbolBottom")
  symbolBottom.style.fontSize = "130px"
  symbolBottom.style.marginRight = "1rem"
  symbolBottom.style.marginBottom = "-1rem"


  

  let symbols = ["♦", "♥", "♠", "♣"]
  let numCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  function RandoElements(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  let symbol = RandoElements(symbols)
  let valueCard = RandoElements(numCard)

  let symbolElement1 = document.querySelector("#symbolTop")
  symbolElement1.innerText = symbol

  let valueElement = document.querySelector("#value")
  valueElement.innerText = valueCard

  let symbolElement2 = document.querySelector("#symbolBottom")
  symbolElement2.innerText = symbol

  if (symbol === "♦" || symbol === "♥") {
    symbolElement1.style.color = "red"
    symbolElement2.style.color = "red"
  }
};
