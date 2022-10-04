const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];
}

module.exports = { isManager, getRelatedEmployees };
