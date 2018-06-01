import uniqueRandomArray from "unique-random-array";
import starWarsNames from "./starwars-names";

const mainExport = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};

export default mainExport;
module.exports = mainExport; // for commonJs compatibility
