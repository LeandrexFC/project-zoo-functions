const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(names, ids) {
  const employName = employees.find(({ firstName, lastName }) => firstName === names.name);
  const employeeFirst = employName.firstName + employName.lastName;
  console.log(employeeFirst);
  const employeerId = employees.find(({ id }) => id === names.id);
  console.log(employeerId);
  return employName;
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
module.exports = getEmployeesCoverage;
