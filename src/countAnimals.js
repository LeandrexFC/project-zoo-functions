const data = require('../data/zoo_data');

function countAnimals(animal) {
  console.log(animal);
  return data.species.find((elements) => elements.residents.length === animal);
}
console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
