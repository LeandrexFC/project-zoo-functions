const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    return {};
  }
  return species.filter((elements) => elements.residents.length === animal);
}
console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
