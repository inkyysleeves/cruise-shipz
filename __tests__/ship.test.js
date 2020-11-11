const Ship = require("../src/ship.js");

describe("ship", () => {
  it("returns a ship object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a starting port", () => {
    const ship = new Ship("Dover");

    expect(ship.port).toEqual("Dover")
  });
});
