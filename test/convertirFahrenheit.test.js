import App from "../src/main";

test("convertirFahrenheit(): 45 to equal 113", () => {
  let myApp = new App();
  expect(myApp.convertirFahrenheit(45).toFixed(2)).toBe((113).toFixed(2));
});
