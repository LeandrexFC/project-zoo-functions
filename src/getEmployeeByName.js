const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return data.employees.find(
    (employeers) =>
      employeers.firstName === employeeName
      || employeers.lastName === employeeName,
  );
}
console.log(getEmployeeByName('Elser'));
module.exports = getEmployeeByName;
