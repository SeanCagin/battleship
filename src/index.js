import "./styles.css";
import { Ship, Gameboard } from "./classes.js";

const board1 = document.querySelector("#board1");
const board2 = document.querySelector("#board2");
const setupDialogue = document.querySelector("#setup");
const setupGrid = document.querySelector("#grid"); //bit misleading naming

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

function pregameRenderBoard(board, gameBoard) {}

function displaySetup() {}

let player1 = new Gameboard();
let player2 = new Gameboard();

inGameRenderBoard(board1, player1);
inGameRenderBoard(board2, player2);
