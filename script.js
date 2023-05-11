ludogame = () => {
  const play1 = Math.floor(Math.random() * 6) + 1;
  const play2 = Math.floor(Math.random() * 6) + 1;
  console.log(play1);
  const play1dice = `./images/${play1}.png`;
  const play2dice = `./images/${play2}.png`;
  document.getElementById("img1").setAttribute("src", play1dice);
  document.getElementById("img2").setAttribute("src", play2dice);
  if (play1 > play2) {
    document.querySelector("h1").innerHTML = "Player1 Wins";
  } else if (play1 < play2) {
    document.querySelector("h1").innerHTML = "Player2 Wins";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
};
