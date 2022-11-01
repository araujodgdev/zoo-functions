const data = require('../data/zoo_data');

function getSpeciesByIds(id, ...ids) {
  const specie = [];
  if (id === undefined) return specie;
  specie.push(data.species.find((animal) => animal.id === id));

  if (ids !== undefined) {
    ids.forEach((numb) => {
      specie.push(data.species.find((animal) => animal.id === numb));
    });
  }

  return specie;
}

module.exports = getSpeciesByIds;
