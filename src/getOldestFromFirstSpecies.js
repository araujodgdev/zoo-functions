const data = require('../data/zoo_data');

function getColabPerson(id) {
  const colab = data.employees.find((employee) => id === employee.id);

  return colab;
}

function getFirstSpecie(id) {
  const colab = getColabPerson(id);

  const specie = [];

  specie.push(data.species.find((animal) =>
    animal.id === colab.responsibleFor[0]));

  return specie;
}

function getOldestFromFirstSpecies(id) {
  const animals = getFirstSpecie(id)[0].residents;

  const oldest = animals.sort((a, b) => b.age - a.age)[0];

  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
