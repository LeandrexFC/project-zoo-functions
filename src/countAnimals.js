const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    return residents.map((elements) => elements.name === animal);
  }
}
console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
