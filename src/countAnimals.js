const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    return species.filter((element) => element.popularity);
  }
}
console.log(countAnimals());
module.exports = countAnimals;
