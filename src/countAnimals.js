const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const obj = {};
  if (!animal) {
    species.forEach((elements) => { obj[elements.name] = elements.residents.length; });
    return obj;
  }
  const { specie, sex } = animal;
  if (specie !== undefined && sex !== undefined) {
    const test = species.find(({ name }) => name === animal.specie);
    const test4 = test.residents.filter(
      (elements) => elements.sex === sex,
    ).length;
    return test4;
  }
  if (specie !== undefined) {
    const test = species.find(({ name }) => name === animal.specie);
    const test2 = test.residents.length;
    return test2;
  }
}
module.exports = countAnimals;
