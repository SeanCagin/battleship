import "./styles.css";
import { Ship, Gameboard } from "./classes.js";

const board1 = document.querySelector("#board1");
const board2 = document.querySelector("#board2");
const setupDialogue = document.querySelector("#setup");
const setupGrid = document.querySelector("#grid"); //bit misleading naming
const buttonList = document.querySelector("#button-list");
const pregameStates = [5, 5, 4, 3, 3, 2, 1, 1]; // ships that will be placed
const turnIndicator = document.querySelector("#turn-indicator");
const titleScreen = document.querySelector("#title-screen");
const singleplayer = document.querySelector("#singleplayer");
const multiplayer = document.querySelector("#multiplayer");
let turn = -1; // universal turn tracker to disable/enable attack events
let mode = -1; // 0: singleplayer mode, 1: multiplayer mode

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && setupDialogue.open) {
    e.preventDefault();
  }
});

singleplayer.addEventListener("click", (e) => {
  multiplayer.classList = "";
  singleplayer.classList.add("selected");
  mode = 0;
});

multiplayer.addEventListener("click", (e) => {
  singleplayer.classList = "";
  multiplayer.classList.add("selected");
  mode = 1;
});

function homeRenderBoard(board, gameBoard) {
  let arr = gameBoard.getBackingArray();
  let hitArr = gameBoard.getHitArray();
  board.classList = "";
  board.innerHTML = "";
  let row;
  for (let i = 0; i < arr.length; i++) {
    row = document.createElement("div");
    row.classList.toggle("row");
    for (let j = 0; j < arr[0].length; j++) {
      let cell = document.createElement("div");
      cell.classList.toggle("cell");
      let isShip = arr[i][j] instanceof Ship;
      let isSunk = false;
      if (isShip) {
        if (arr[i][j].isSunk()) isSunk = true;
      }
      if (isSunk) {
        cell.classList.toggle("sunk-ship");
      } else if (hitArr[i][j] && isShip) {
        cell.classList.toggle("hit");
        cell.classList.toggle("alive");
      } else if (hitArr[i][j] && !isShip) {
        cell.classList.toggle("hit");
      } else if (!isSunk && isShip) {
        cell.classList.toggle("full-cell");
      }
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}

function enemyRenderBoard(board, gameBoard) {
  let arr = gameBoard.getBackingArray();
  let hitArr = gameBoard.getHitArray();
  board.classList = "";
  board.innerHTML = "";
  let row;
  for (let i = 0; i < arr.length; i++) {
    row = document.createElement("div");
    row.classList.toggle("row");
    for (let j = 0; j < arr[0].length; j++) {
      let cell = document.createElement("div");
      cell.classList.toggle("cell");
      row.appendChild(cell);

      let isShip = arr[i][j] instanceof Ship;
      let isSunk = false;
      if (isShip) {
        if (arr[i][j].isSunk()) isSunk = true;
      }
      if (isSunk) {
        cell.classList.toggle("sunk-ship");
        continue;
      } else if (hitArr[i][j] && isShip) {
        cell.classList.toggle("alive");
        cell.classList.toggle("hit");
      } else if (hitArr[i][j] && !isShip) {
        cell.classList.toggle("hit");
      } else {
        cell.classList.toggle("enemy-cell");
        cell.addEventListener("click", () => {
          // either player 1's turn in both single player and multiplayer
          // or player 2's (player1 is the enemy gb) turn in multiplayer only.
          if (turn == 0 || (mode == 1 && gameBoard == player1 && turn == 1)) {
            gameBoard.receiveAttack([i, j]);
            enemyRenderBoard(board, gameBoard);
            gameChecker();
          }
        });
      }
    }
    board.appendChild(row);
  }
}

function displaySetup(gameBoard) {
  return new Promise((resolve, reject) => {
    let pregamePointer = 0;
    setupDialogue.showModal();
    let gridArr = new Array(10);
    for (let i = 0; i < 10; i++) {
      gridArr[i] = new Array(10);
    }
    buttonList.innerHTML = "";
    const rotate = document.createElement("button");
    const randButt = document.createElement("button");
    const restart = document.createElement("button");
    const done = document.createElement("button");
    rotate.innerText = "rotate";
    randButt.innerText = "randomize";
    restart.innerText = "restart";
    done.innerText = "done!";
    rotate.addEventListener("click", () => {
      setupDialogue.classList.toggle("v");
      pregameRenderBoard();
    });
    randButt.addEventListener("click", () => {
      randomize(gameBoard);
      pregamePointer = pregameStates.length;
      pregameRenderBoard();
    });
    restart.addEventListener("click", () => {
      pregamePointer = 0;
      gameBoard.reset();
      pregameRenderBoard();
    });
    done.addEventListener("click", () => {
      if (pregamePointer >= pregameStates.length) {
        setupDialogue.close();
        resolve();
      }
    });
    buttonList.appendChild(rotate);
    buttonList.appendChild(randButt);
    buttonList.appendChild(restart);
    buttonList.appendChild(done);
    pregameRenderBoard();

    function pregameRenderBoard() {
      let direction = setupDialogue.classList.contains("v") ? "v" : "h";
      let arr = gameBoard.getBackingArray();
      setupGrid.innerHTML = "";
      let row;
      for (let i = 0; i < arr.length; i++) {
        row = document.createElement("div");
        row.classList.toggle("row");
        for (let j = 0; j < arr[0].length; j++) {
          let cell = document.createElement("div");
          row.appendChild(cell);
          gridArr[i][j] = cell;
          cell.classList.toggle("cell");

          if (arr[i][j] instanceof Ship) {
            cell.classList.toggle("full-cell");
            continue;
          }

          let length = pregameStates[pregamePointer];
          let start = [i, j];
          let end = [-1, -1];
          if (direction == "v") {
            end = [i + length - 1, j];
          } else if (direction == "h") {
            end = [i, j + length - 1];
          }

          cell.addEventListener("click", () => {
            if (gameBoard.placeShip([i, j], end)) {
              pregamePointer++;
              pregameRenderBoard(direction);
            }
          });

          cell.addEventListener("mouseenter", (e) =>
            handleHover(
              start,
              length,
              direction,
              gridArr,
              gameBoard.isPlaceable(start, end)
            )
          );
          cell.addEventListener("mouseleave", () => resetHover());
          gridArr[i][j] = cell;
        }
        setupGrid.appendChild(row);
      }
    }

    function handleHover(start, length, direction, arr, legality) {
      for (let i = 0; i < length; i++) {
        let currentSquare;

        if (direction == "h") {
          if (start[1] + i < 10) currentSquare = arr[start[0]][start[1] + i];
        } else if (direction == "v") {
          if (start[0] + i < 10) currentSquare = arr[start[0] + i][start[1]];
        }

        if (currentSquare && legality) {
          currentSquare.classList.add("hovered");
        } else if (currentSquare && !legality) {
          currentSquare.classList.add("illegal-hovered");
        }
      }
    }
  });
}

function resetHover() {
  document.querySelectorAll(".hovered").forEach((square) => {
    square.classList.remove("hovered");
  });
  document.querySelectorAll(".illegal-hovered").forEach((square) => {
    square.classList.remove("illegal-hovered");
  });
}

function randomize(gameBoard) {
  gameBoard.reset();
  let pregamePointer = 0;
  while (pregamePointer < pregameStates.length) {
    let direction = Math.floor(Math.random() * 2);
    let start = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    let end = [-1, -1];
    if (direction == 0) {
      end = [start[0], start[1] + pregameStates[pregamePointer] - 1];
    } else if (direction == 1) {
      end = [start[0] + pregameStates[pregamePointer] - 1, start[1]];
    }
    if (gameBoard.placeShip(start, end)) pregamePointer++;
  }
}

function getWinner(gb1, gb2) {
  if (gb1.allShipsSunk()) {
    return gb2;
  } else if (gb2.allShipsSunk()) {
    return gb1;
  }
  return -1;
}

// moderator/ref (intermediate state)
function gameChecker() {
  let winner = getWinner(player1, player2);
  if (winner == player1) {
    turn = -1;
    displayWinner(player1);
    return;
  } else if (winner == player2) {
    turn = -1;
    displayWinner(player2);
    return;
  }
  if (mode == 1) {
    turnIndicator.textContent = `You have 5 seconds to pass the device to the other player`;
  }
  if (turn == 0) {
    // if the incoming turn was 0, execute turn 1
    turn = -1;
    if (mode == 0) {
      setTurnGUI(player2);
      turn = 1;
      setTimeout(() => {
        attackWithComputer(player1);
        homeRenderBoard(board1, player1);
      }, 1000); // give the impression that the computer is thinking lol
    } else if (mode == 1) {
      setTimeout(() => {
        turn = 1;
        setTurnGUI(player2);
        enemyRenderBoard(board1, player1);
        homeRenderBoard(board2, player2);
      }, 5000);
      //TODO: write this code lol
    }
  } else if (turn == 1) {
    // if the incoming turn was 1, execute turn 0
    turn = -1;
    if (mode == 0) {
      turn = 0;
      setTurnGUI(player1);
      enemyRenderBoard(board2, player2);
    }
    setTimeout(() => {
      turn = 0;
      setTurnGUI(player1);
      enemyRenderBoard(board2, player2);
      homeRenderBoard(board1, player1);
    }, 5000);
  }
}

function attackWithComputer(gb) {
  let arr = gb.getBackingArray();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (gb.isHit([i, j]) && gb.shipExists([i, j]) && !arr[i][j].isSunk()) {
        let attackSuccess = false;
        let square = [-1, -1];
        // north
        square = [i - 1, j];
        if (gb.isLegalSquare(square)) attackSuccess = gb.receiveAttack(square);
        if (!attackSuccess) {
          // east
          square = [i, j + 1];
          if (gb.isLegalSquare(square))
            attackSuccess = gb.receiveAttack(square);
        } else {
          gameChecker();
          return;
        }
        if (!attackSuccess) {
          // south
          square = [i + 1, j];
          if (gb.isLegalSquare(square))
            attackSuccess = gb.receiveAttack(square);
        } else {
          gameChecker();
          return;
        }
        if (!attackSuccess) {
          // west
          square = [i, j - 1];
          if (gb.isLegalSquare(square))
            attackSuccess = gb.receiveAttack(square);
        } else {
          gameChecker();
          return;
        }
        if (attackSuccess) {
          gameChecker();
          return;
        }
      }
    }
  }
  // no attacked ship has been found.
  let attackSuccess = false;
  let square = [-1, -1];
  while (!attackSuccess) {
    square = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    attackSuccess = gb.receiveAttack(square);
  }
  gameChecker();
  return;
}

function setTurnGUI(player) {
  if (player == player1) {
    turnIndicator.textContent = "player 1's turn";
  } else if (mode == 0) {
    turnIndicator.textContent = "computer's turn";
  } else {
    turnIndicator.textContent = "player 2's turn";
  }
}

function displayWinner(player) {
  if (player == player1) {
    turnIndicator.textContent = "player 1 has won!";
  } else if (mode == 0) {
    turnIndicator.textContent = "the computer has won!";
  } else if (mode == 1) {
    turnIndicator.textContent = "player 2 has won!";
  }
}

titleScreen.showModal();
start.addEventListener("click", () => {
  if (mode != -1) {
    titleScreen.close();
    turn = 0;
    if (mode == 0) {
      displaySetup(player1).then(() => {
        randomize(player2); // shuffle computer ships
        homeRenderBoard(board1, player1);
        enemyRenderBoard(board2, player2);
      });
    } else if (mode == 1) {
      displaySetup(player1)
        .then(() => displaySetup(player2))
        .then(() => {
          turn = 0;
          homeRenderBoard(board1, player1);
          enemyRenderBoard(board2, player2);
        });
    }
  }
});

let player1 = new Gameboard();
let player2 = new Gameboard(); // currently computer

// randomize(player2);

//inGameRenderBoard(board1, player1);
