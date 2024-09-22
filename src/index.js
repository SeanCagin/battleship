import "./styles.css";
import { Ship, Gameboard } from "./classes.js";

const board1 = document.querySelector("#board1");
const board2 = document.querySelector("#board2");
const setupDialogue = document.querySelector("#setup");
const setupGrid = document.querySelector("#grid"); //bit misleading naming
const rotate = document.querySelector(".rotate");

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
  let gridArr = new Array(10);
  for (let i = 0; i < 10; i++) {
    gridArr[i] = new Array(10);
  }
  rotate.addEventListener("click", () => {
    setupDialogue.classList.toggle("v");
    pregameRenderBoard();
  });
  pregameRenderBoard();

  function pregameRenderBoard() {
    let direction = setupDialogue.classList.contains("v") ? "v" : "h";
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
        gridArr[i][j] = cell;
        cell.classList.toggle("cell");

        if (arr[i][j] instanceof Ship) {
          cell.classList.toggle("black-cell");
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
}

function resetHover() {
  document.querySelectorAll(".hovered").forEach((square) => {
    square.classList.remove("hovered");
  });
  document.querySelectorAll(".illegal-hovered").forEach((square) => {
    square.classList.remove("illegal-hovered");
  });
}

let player1 = new Gameboard();
let player2 = new Gameboard();

displaySetup(player1);

inGameRenderBoard(board1, player1);
inGameRenderBoard(board2, player2);
