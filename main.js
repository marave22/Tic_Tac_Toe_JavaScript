let turn  = "X";
let winner = null;

startGame = () => {
    setMessage(turn + " gets to start");
};

setMessage = (msg) => {
    document.getElementById('message').innerText = msg;
};

nextMove = (square) => {
    if (winner !== null) {
        setMessage(winner + " already won the game.");
    } else if (square.innerText === "") {
        square.innerText = turn;
        switchTurn();
    } else {
        setMessage("Draw");
    }
};

switchTurn =  () => {
    if (checkWinner(turn)) {
        setMessage(turn + " win!!!");
        winner = turn;
    } else if (turn === "X") {
        turn = "O";
        setMessage("It's " + turn + "'s turn");
    } else {
        turn = "X";
        setMessage("It's " + turn + "'s turn");
    }
};

checkRow = (a, b, c, move) => {
    let result = false;
    if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
        result = true;
    }
    return result;
};

getBox = (number) => {
   return document.getElementById(number).innerText;
};

checkWinner = (move) => {
  let result = false;
  if (checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 9, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 7, move)) {

      result = true;
  }
  return result;
};

clearBox = () => {
    return document.location.reload(true);
};
