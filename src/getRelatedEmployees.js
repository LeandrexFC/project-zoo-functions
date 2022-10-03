const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.every((elements) => elements.managers === id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
module.exports = { isManager, getRelatedEmployees };
