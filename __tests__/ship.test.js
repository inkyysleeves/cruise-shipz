const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/itinerary.js");

describe("ship", () => {
  it("returns a ship object", () => {
      const port = new Port('Dover');
      const itinerary = new Itinerary([port])
      const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
  
    expect(ship.currentPort).toBe(port);
  });
  

  it("can set sail", () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
  

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });

  it("can dock at a different port", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais);
  });
  it("can't sail furether than its itinerary", () => {
     const dover = new Port('Dover');
     const calais = new Port('Calais');
     const itinerary = new Itinerary([dover, calais]);
     const ship = new Ship(itinerary);

     ship.setSail();
     ship.dock();

     expect(() => ship.setSail()).toThrowError('End of the line byatch!!');
     });
});


