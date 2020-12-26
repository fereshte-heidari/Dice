  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomPicture1 = "images/dice" + randomNumber1 + ".png";
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomPicture2 = "dice" + randomNumber2 + ".png";
  var randomPicture2 = "images/dice" + randomNumber2 + ".png";
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!🚩</i>";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  //first dice
  document.querySelector("img.img1").setAttribute("src", randomPicture1);
  // Second Dice
  document.querySelector("img.img2").setAttribute("src", randomPicture2);
