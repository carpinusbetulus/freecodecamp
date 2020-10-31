const telephoneCheck = require("./telephoneChecker");

// Without country code
test('Return true for "555-555-5555"', () => {
  expect(telephoneCheck("555-555-5555")).toBe(true);
});
test('Return true for "5555555555"', () => {
  expect(telephoneCheck("5555555555")).toBe(true);
});
test('Return true for "(555)555-5555"', () => {
  expect(telephoneCheck("(555)555-5555")).toBe(true);
});
test('Return false for "555-5555"', () => {
  expect(telephoneCheck("555-5555")).toBe(false);
});
test('Return false for "5555555"', () => {
  expect(telephoneCheck("5555555")).toBe(false);
});
test('Return false for "555)-555-5555"', () => {
  expect(telephoneCheck("555)-555-5555")).toBe(false);
});
test('Return false for "(555-555-5555"', () => {
  expect(telephoneCheck("(555-555-5555")).toBe(false);
});
test('Return false for "(555)5(55?)-5555"', () => {
  expect(telephoneCheck("(555)5(55?)-5555")).toBe(false);
});
test('Return false for "123**&!!asdf#"', () => {
  expect(telephoneCheck("123**&!!asdf#")).toBe(false);
});
test('Return false for "27576227382"', () => {
  expect(telephoneCheck("27576227382")).toBe(false);
});
