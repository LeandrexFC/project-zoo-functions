const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  console.log(animal)
  return data.species.find((animals) => animals.name === animal.every((idade) => idade.residents.age >= age));
}

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
