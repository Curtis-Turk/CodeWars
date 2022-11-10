const spoonerise = require("./crushingBlows");

test("No spoons here for one word", () => {
  expect(spoonerise("word")).toEqual("No spoons here");
});
test("No spoons here for different word", () => {
  expect(spoonerise("other")).toEqual("No spoons here");
});
test("No spoons here for four words", () => {
  expect(spoonerise("other than four words")).toEqual("No spoons here");
});
test("No spoons here for four different words", () => {
  expect(spoonerise("other than five words")).toEqual("No spoons here");
});
test("returns first letters swapped for two words", () => {
  expect(spoonerise("Ca Ba")).toEqual("Ba Ca");
});
test("returns first letters swapped for two words", () => {
  expect(spoonerise("Dental Receptionist")).toEqual("Rental Deceptionist");
});
test("returns first letters swapped for three words skipping middle word", () => {
  expect(spoonerise("pack of lies")).toEqual("lack of pies");
});
test("returns first letters swapped for two words", () => {
  expect(spoonerise("strong wrangler")).toEqual("wrong strangler");
});
test("returns first letters swapped for two words", () => {
  expect(spoonerise("Cba Xyo")).toEqual("Xya Cbo");
});
