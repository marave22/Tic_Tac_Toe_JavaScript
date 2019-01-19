let player = {
    X_move: [],
    O_move: [],
    move: 0,
    clickId: "",
    winningCombinations: [
        [1, 2, 3],[4, 5, 6],[7, 8, 9],
        [1, 4, 7],[2, 5, 8],[3, 6, 9],
        [1, 5, 9],[3, 5, 7]
    ]
};

getButtonId = (id) => {
    player.clickId = id;
    if (player.move % 2 === 0) {
        document.getElementById(player.clickId).innerHTML = "X";
        player.X_move.unshift(player.clickId);
        console.log(player.X_move);
    } else {
        document.getElementById(player.clickId).innerHTML = "O";
        player.O_move.unshift(player.clickId);
        console.log(player.O_move);
    }
    player.move += 1;

    if (player.X_move.length > 3 && player.O_move.length > 3) {
        player.X_move.forEach(function (element) {
            for (let i = 0; i < player.winningCombinations.length; i++) {
                for (let j = 0; j < player.X_move.length; j++) {
                    if (player.winningCombinations[i].includes(element)) {
                        alert("Winner is X");
                    }
                }
            }
        });
        player.O_move.forEach(function (element) {
            for (let k = 0; k < player.winningCombinations.length; k++) {
                for (let m = 0; m < player.O_move.length; m++) {
                    if (player.winningCombinations[k].includes(element)) {
                        alert("Winner is O");
                    } else {
                        alert("Draw");
                    }
                }
            }
        });
    }

};

function restartGame() {
    for (let s = 0; s < 10; s++) {
        player.X_move = 0;
        player.O_move = 0;
    }
}