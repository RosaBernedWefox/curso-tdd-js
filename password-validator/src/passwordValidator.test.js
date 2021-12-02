import passwordValidator from "./passwordValidator";
// - Have more than 8 characters
// - Contains at least a capital letter
// - Contains at least a lowercase
// - Contains at least number
// - Contains at least an underscore
//   'Q_xcrtuoew9'
test("have more than 8 characters", () => {
  expect(passwordValidator('Q_xcrtuoew9')).toEqual(true);
});

test("invalid with less than 8 characters", () => {
  expect(passwordValidator('Q_xcrtu9')).toEqual(false);
});

test("contains at least a capital letter", () => {
  expect(passwordValidator('_xcrtuoew9')).toEqual(false);
});

test("Contains at least a lowercase", () => {
  expect(passwordValidator('Q_XCRTUOEW9')).toEqual(true);
});

test("Contains at least a lowercase", () => {
  expect(passwordValidator('Q_XCRTUOEw9')).toEqual(false);
});
