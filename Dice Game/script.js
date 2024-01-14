const rollButton = document.querySelector("#roll-button");
const output = document.querySelector("#output");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const dice = [[5], [1, 9], [1, 5, 9], [1, 3, 7, 9], [1, 3, 5, 7, 9], [1, 3, 4, 6, 7, 9]];

function roll(num) {
  let diceNum = Math.floor(Math.random() * num) + 1;
  //   let diceVisual = `&#${9855 + diceNum};`;

  return diceNum;
}

function diceBuilder(diceNumber) {
  let div = document.createElement("div");
  // let diceArray = )
  let diceArray = dice[diceNumber - 1];
  for (let x = 1; x < 10; x++) {
    let span = document.createElement("span");
    span.setAttribute("class", "dot");
    if (diceArray.includes(x)) {
      span.classList.add("black");
    }
    div.appendChild(span);
  }
  div.setAttribute("class", "dicer");
  return div;
}

function updateOutput(el, num) {
  let holder = diceBuilder(num);
  if (el.children[0]) {
    el.children[0].remove();
  }
  el.appendChild(holder);
}

rollButton.addEventListener("click", function (e) {
  console.log("works");
  let rollDice = [roll(6), roll(6)];
  let mssg;
  if (rollDice[1] == rollDice[2]) {
    mssg = "It is a draw";
  } else if (rollDice[0] > rollDice[1]) {
    mssg = "Player 1 Wins";
  } else {
    mssg = "Player 2 Wins";
  }
  updateOutput(player1, rollDice[0]);
  updateOutput(player2, rollDice[1]);
  output.innerHTML = mssg;
});
