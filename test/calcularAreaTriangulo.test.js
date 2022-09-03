import App from "../src/main";

test("calcularAreaTriangulo(): base 10 y altura 5 to equal 25.54", () => {
  let myApp = new App();
  expect(myApp.calcularAreaTriangulo(10, 5).toFixed(2)).toBe((25).toFixed(2));
});
