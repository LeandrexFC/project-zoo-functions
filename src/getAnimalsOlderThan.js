const data = require('../data/zoo_data');

const { species } = data;

const { residents } = species[0];

function getAnimalsOlderThan(animal, age) {
  species.filter((elements) => elements.name === animal);
  const test2 = residents.every((element) => element.age >= age);
  return test2;
}

module.exports = getAnimalsOlderThan;
