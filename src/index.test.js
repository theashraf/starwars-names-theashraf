import starWarsNames from "./index";

const isArrayOfStrings = (array) => {
  return array.every(item => {
    return typeof item === "string";
  });
}

describe("starwars-names-theashraf", () => {
  it("should have a list of all available names", () => {
    // starWarsNames.all
    expect(isArrayOfStrings(starWarsNames.all)).toBe(true);
  });

  it("should allow me to get a random name from the list", () => {
    // starWarsNames.random
    // starWarsNames.all
    const randomName = starWarsNames.random();
    expect(starWarsNames.all).toContain(randomName);
  });
});


