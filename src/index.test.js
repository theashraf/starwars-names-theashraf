"use strict";

var starWarsNames = require("./index");

describe("starwars-names-theashraf", function() {
  it("should have a list of all available names", function() {
    // starWarsNames.all
    expect(isArrayOfStrings(starWarsNames.all)).toBe(true);
  });

  it("should allow me to get a random name from the list", function() {
    // starWarsNames.random
    // starWarsNames.all
    var randomName = starWarsNames.random();
    expect(starWarsNames.all).toContain(randomName);
  });
});

function isArrayOfStrings(array) {
  return array.every(function(item) {
    return typeof item === "string";
  });
}
