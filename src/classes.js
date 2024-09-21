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

  placeShip(start, stop) {
    if (this.shipExistsInRange(start, stop)) {
      return false;
    }
    if (
      start[0] < 0 ||
      start[0] >= this.#size ||
      start[1] < 0 ||
      start[1] >= this.#size ||
      stop[0] < 0 ||
      stop[0] >= this.#size ||
      stop[1] < 0 ||
      stop[1] >= this.#size
    ) {
      return false;
    }
    let length = 0;
    if (start[0] == stop[0]) {
      length = Math.abs(stop[1] - start[1]) + 1;
    } else if (start[1] == stop[1]) {
      length = Math.abs(Math.abs(stop[0] - start[0])) + 1;
    }
    // length is 0 if none of the above 2 are entered so this acocunts for
    // non-line placement attempts
    if (length < 1 || length > 4) return false;
    this.#placeShipH(start, stop, length);
    return true;
  }

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
    if (this.#isHit(coordinate)) return false;
    if (this.shipExists(coordinate)) {
      this.backingArray[coordinate[0]][coordinate[1]].hit();
    }
    this.hitArray[coordinate[0]][coordinate[1]] = true;
    return true;
  }

  #isHit(coordinate) {
    if (this.hitArray[coordinate[0]][coordinate[1]]) {
      return true;
    }
    return false;
  }

  allShipsSunk() {
    for (let i = 0; i < this.backingArray.length; i++) {
      for (let j = 0; j < this.backingArray.length[0]; j++) {
        if (
          typeof this.backingArray[i][j] instanceof Ship &&
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
}

class Player {}

export { Ship, Gameboard, Player };
