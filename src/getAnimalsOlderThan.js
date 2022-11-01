const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const output = data.species.find((specie) => specie.name === animal);
  return output.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
