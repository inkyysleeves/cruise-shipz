const Port = require("../src/port.js");

describe("port", () => {
  it("returns a port object", () => {
    const port = new Port("dover");

    expect(new Port()).toBeInstanceOf(Object);
  });
  it("can see a port has a name", () => {
    const port = new Port("Dover");
    
    expect(port.name).toEqual('Dover');
  });
});
