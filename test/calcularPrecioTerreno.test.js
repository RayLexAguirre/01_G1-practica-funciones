import App from "../src/main";

test("calcularPrecioTerreno(10, 25, 2500):  to equal 625000", () => {
  let myApp = new App();
  expect(myApp.calcularPrecioTerreno(10, 25, 2500).toFixed(2)).toBe((10*25*2500).toFixed(2));
});
