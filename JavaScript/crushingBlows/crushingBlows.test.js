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
