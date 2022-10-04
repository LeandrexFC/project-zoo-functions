const data = require('../data/zoo_data');

const { species } = data;

function getOldestFromFirstSpecies(id) {
  const test = data.employees.filter((elements) => elements.id === id);
  const test2 = test[0].responsibleFor[0];
  const test3 = species.filter((element) => element.id === test2);
  const test4 = test3.find(({ residents }) => residents.values());
  const maxAge = test4.residents.reduce((acc, cur) => (acc.age > cur.age ? acc : cur));
  return Object.values(maxAge);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
