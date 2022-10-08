const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) {
      obj.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      obj.adult += 1;
    } else {
      obj.senior += 1;
    }
  });
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  let result;
  const { prices } = data;
  const arrayPrices = [prices];
  const clients = countEntrants(entrants);
  arrayPrices.forEach((element) => {
    result = element.adult * clients.adult
    + element.senior * clients.senior
    + element.child * clients.child;
  });
  return result;
}

module.exports = { calculateEntry, countEntrants };
