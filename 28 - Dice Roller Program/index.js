function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImg = document.getElementById("diceImg");
  const values = [];
  const img = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    img.push(
      `<img src ="dice_img/${value}.svg" style="height:100px; width:100px">`
    );
  }

  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImg.innerHTML = img.join(" ");
}
