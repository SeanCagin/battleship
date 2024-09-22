import { Ship, Gameboard, Player } from "../classes";

describe("ship functionality", () => {
  let ship = new Ship(4);
  test("hit", () => {
    expect(ship.isSunk()).toBe(false);
    for (let i = 0; i < ship.getLength(); i++) {
      ship.hit();
    }
    expect(ship.isSunk()).toBe(true);
    expect(() => ship.hit()).toThrow();
  });
});

describe("gameboard functionality", () => {
  let gb = new Gameboard();

  test("place ship", () => {
    expect(gb.placeShip([0, 0], [0, 3])).toBe(true);
    expect(gb.onlyShipExistsInRange([0, 0], [0, 3])).toBe(true);
    expect(gb.shipExists([0, 4])).toBe(false);
    expect(gb.placeShip([0, 0], [0, 1])).toBe(false);
    expect(gb.placeShip([1, 1], [1, 7])).toBe(true);
    expect(gb.placeShip([2, 2], [3, 3])).toBe(false);
  });
  test("receive attack ship", () => {
    gb.receiveAttack([0, 2]);
    expect(gb.backingArray[0][1].getHitCount()).toBe(1);
    expect(gb.receiveAttack([0, 2])).toBe(false);
    gb.receiveAttack([2, 2]);
    expect(gb.getHitArray()[2][2]).toBe(true);
  });
  test("all ships sunk", () => {
    gb.receiveAttack([0, 0]);
    gb.receiveAttack([0, 1]);

    expect(gb.allShipsSunk()).toBe(true);
  });
  test("reset", () => {
    gb.reset();
    expect(gb.onlyShipExistsInRange([0, 0], [0, 3])).toBe(false);
  });
});

describe("player functionality", () => {});
