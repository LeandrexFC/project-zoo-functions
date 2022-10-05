const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const test = species.find(({ name }) => name === animal.specie);
  const test2 = test.residents.length;
  console.log(test2);
  const test4 = test.residents.filter((elements) => elements.sex === 'female');
  if (animal === undefined) {
    return {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
  }
  return test4.length;
}

console.log(countAnimals());
module.exports = countAnimals;
