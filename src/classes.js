class Ship {
  #length;
  #hitCount = 0;
  constructor(length) {
    this.#length = length;
  }

  hit() {
    if (this.#hitCount >= this.#length) throw "ship has reached max hits";
    this.#hitCount++;
  }

  isSunk() {
    if (this.#hitCount >= this.#length) return true;
    return false;
  }

  getLength() {
    return this.#length;
  }

  getHitCount() {
    return this.#hitCount;
  }
}

class Gameboard {
  #size = 10;
  constructor() {
    this.init();
  }

  init() {
    this.backingArray = new Array(this.#size);
    this.hitArray = new Array(this.#size);
    for (let i = 0; i < this.#size; i++) {
      this.backingArray[i] = new Array(this.#size);
      this.hitArray[i] = new Array(this.#size);
      for (let j = 0; j < this.#size; j++) {
        this.backingArray[i][j] = 0;
        this.hitArray[i][j] = false;
      }
    }
  }

  isLegalSquare([c1, c2]) {
    if (c1 < 0 || c1 >= this.#size || c2 < 0 || c2 >= this.#size) {
      return false;
    }
    return true;
  }

  isPlaceable(start, stop) {
    if (!this.isLegalSquare(start)) return false;
    if (!this.isLegalSquare(stop)) return false;
    if (this.shipExistsInRange(start, stop)) {
      return false;
    }
    let length = 0;
    if (start[0] == stop[0]) {
      length = Math.abs(stop[1] - start[1]) + 1;
    } else if (start[1] == stop[1]) {
      length = Math.abs(Math.abs(stop[0] - start[0])) + 1;
    }
    if (length == 0) return false;
    return length;
  }
  placeShip(start, stop) {
    let length = this.isPlaceable(start, stop);
    if (length === false) return false;
    // length is 0 if none of the above 2 are entered so this acocunts for
    // non-line placement attempts
    this.#placeShipH(start, stop, length);
    return true;
  }
  false;
  #placeShipH(start, stop, length) {
    let ship = new Ship(length);
    for (
      let i = Math.min(start[0], stop[0]);
      i <= Math.max(start[0], stop[0]);
      i++
    ) {
      for (
        let j = Math.min(start[1], stop[1]);
        j <= Math.max(start[1], stop[1]);
        j++
      ) {
        this.backingArray[i][j] = ship;
      }
    }
  }

  receiveAttack(coordinate) {
    if (this.isHit(coordinate)) return false;
    if (this.shipExists(coordinate)) {
      this.backingArray[coordinate[0]][coordinate[1]].hit();
    }
    this.hitArray[coordinate[0]][coordinate[1]] = true;
    return true;
  }

  isHit(coordinate) {
    if (this.hitArray[coordinate[0]][coordinate[1]]) {
      return true;
    }
    return false;
  }

  allShipsSunk() {
    for (let i = 0; i < this.backingArray.length; i++) {
      for (let j = 0; j < this.backingArray[0].length; j++) {
        if (
          this.backingArray[i][j] instanceof Ship &&
          !this.backingArray[i][j].isSunk()
        ) {
          return false;
        }
      }
    }
    return true;
  }

  shipExists(coordinate) {
    if (this.backingArray[coordinate[0]][coordinate[1]] instanceof Ship) {
      return true;
    }
    return false;
  }

  shipExistsInRange(c1, c2) {
    for (let i = Math.min(c1[0], c2[0]); i <= Math.max(c1[0], c2[0]); i++) {
      for (let j = Math.min(c1[1], c2[1]); j <= Math.max(c1[1], c2[1]); j++) {
        if (this.shipExists([i, j])) return true;
      }
    }
    return false;
  }

  onlyShipExistsInRange(c1, c2) {
    for (let i = Math.min(c1[0], c2[0]); i <= Math.max(c1[0], c2[0]); i++) {
      for (let j = Math.min(c1[1], c2[1]); j <= Math.max(c1[1], c2[1]); j++) {
        if (!this.shipExists([i, j])) return false;
      }
    }
    return true;
  }

  getBackingArray() {
    return this.backingArray;
  }

  getHitArray() {
    return this.hitArray;
  }

  reset() {
    this.init();
  }
}

class Player {}

export { Ship, Gameboard, Player };
