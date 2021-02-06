

var num1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var imgSource1 = "images/dice" + num1 + ".png"; // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", imgSource1);


var num2 = Math.floor(Math.random() * 6) + 1;

var imgSource2 = "images/dice" + num2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imgSource2);

if (num1 > num2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else if (num1 === num2) {
  document.querySelector("h1").textContent = "Draw!";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
