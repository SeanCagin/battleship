import "./styles.css";
import { Ship, Gameboard } from "./classes.js";

const board1 = document.querySelector("#board1");
const board2 = document.querySelector("#board2");
const setupDialogue = document.querySelector("#setup");
const setupGrid = document.querySelector("#grid"); //bit misleading naming

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && setupDialogue.open) {
    e.preventDefault();
  }
});

function inGameRenderBoard(board, gameBoard) {
  let arr = gameBoard.getBackingArray();
  let hitArr = gameBoard.getHitArray();
  board.classList = "";
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
      if (isShip && hitArr[i][j] && !isSunk) {
        cell.classList.toggle("hit-ship");
      } else if (hitArr[i][j] && !isShip) {
        cell.classList.toggle("hit");
      }
      if (isSunk) {
        cell.classList.toggle("sunk-ship");
      }
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}

function displaySetup(gameBoard) {
  let pregameStates = [5, 4, 3, 3, 2];
  let pregamePointer = 0;
  setupDialogue.showModal();
  pregameRenderBoard();

  function pregameRenderBoard(shipDirection = "h") {
    if (pregamePointer >= pregameStates.length) {
      setupDialogue.close();
      return;
    }
    let arr = gameBoard.getBackingArray();
    setupGrid.innerHTML = "";
    let row;
    for (let i = 0; i < arr.length; i++) {
      row = document.createElement("div");
      row.classList.toggle("row");
      for (let j = 0; j < arr[0].length; j++) {
        let cell = document.createElement("div");
        row.appendChild(cell);
        cell.classList.toggle("cell");

        if (arr[i][j] instanceof Ship) {
          cell.classList.toggle("black-cell");
          continue;
        }

        cell.addEventListener("click", () => {
          let endIndex = [-1, -1];
          if (shipDirection == "v") {
            endIndex = [i + pregameStates[pregamePointer] - 1, j];
          } else if (shipDirection == "h") {
            endIndex = [i, j + pregameStates[pregamePointer] - 1];
          }
          if (gameBoard.placeShip([i, j], endIndex)) {
            pregamePointer++;
            pregameRenderBoard(shipDirection);
          }
        });
      }
      setupGrid.appendChild(row);
    }
  }
}

let player1 = new Gameboard();
let player2 = new Gameboard();

displaySetup(player1);

inGameRenderBoard(board1, player1);
inGameRenderBoard(board2, player2);
