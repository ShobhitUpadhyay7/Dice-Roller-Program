function rollD() {
  let Number = document.getElementById("numOfDice").value;
  let Result = document.getElementById("result");
  let ImageOfD = document.getElementById("images");
  let values = [];
  let images = [];

  for (let i = 0; i < Number; i++) {
    let Rnumbers = Math.floor(Math.random() * 6) + 1;
    values.push(Rnumbers);
    images.push(`<img src="${Rnumbers}.png" alt="Dice ${Rnumbers}">`);
  }
  Result.textContent = `Dice : ${values.join(`,`)}`;
  ImageOfD.innerHTML = images.join("");
}
