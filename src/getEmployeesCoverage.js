const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

const filterElements = (obj) => employees.find((elements) => elements.firstName === obj.name
|| elements.lastName === obj.name || elements.id === obj.id);

const findSpecies = (specie) => specie.responsibleFor.map((id) =>
  species.find((elements) => (elements.id === id)));

const getAllPeople = () => employees.map((elements) => ({
  id: elements.id,
  fullName: `${elements.firstName} ${elements.lastName}`,
  species: findSpecies(elements).map((element) => element.name),
  locations: findSpecies(elements).map((element) => element.location),
}));

function getEmployeesCoverage(object) {
  if (object === undefined) {
    return getAllPeople();
  }
  if (filterElements(object) === undefined) {
    throw new Error('Informações inválidas');
  }
  const finalResults = {
    id: filterElements(object).id,
    fullName: `${filterElements(object).firstName} ${filterElements(object).lastName}`,
    species: findSpecies(filterElements(object)).map((elements) => elements.name),
    locations: findSpecies(filterElements(object)).map((elements) => elements.location),
  };

  return finalResults;
}

console.log(getEmployeesCoverage({ name: 'Spry' }));
module.exports = getEmployeesCoverage;
