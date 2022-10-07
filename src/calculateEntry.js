const data = require('../data/zoo_data');

const entrants2 = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((elements) => {
    if (elements.age < 18) {
      obj.child += 1;
    }
    if (elements.age >= 18 && elements.age < 50) {
      obj.adult += 1;
    } else {
      obj.senior = 1;
    }
  });
  return obj;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const prices = {
    adult: 49.99,
    senior: 24.99,
    child: 20.99,
  };

  const sum = child.valueOf() * prices.child;
  const sum2 = adult.valueOf() * prices.adult;
  const sum3 = senior.valueOf() * prices.senior;

  return sum + sum2 + sum3;
}

console.log(calculateEntry(entrants2));
module.exports = { calculateEntry, countEntrants };
