import App from "../src/main";

test("elevarCubo() elevar 3 al cubo igual a 27", () => {
  let myApp = new App();
  expect(myApp.elevarCubo(3)).toBe(27);
});
