const data = require('../data/zoo_data');

function countAnimals(animal) {
  const amount = {};
  if (animal === undefined) {
    data.species.forEach((specie) => { amount[`${specie.name}`] = specie.residents.length; });
    return amount;
  }
  const { specie, sex } = animal;
  amount[specie] = data.species.find((elemnt) => elemnt.name === specie).residents.length;
  if (sex !== undefined) {
    const target = data.species.find((elemnt) => elemnt.name === specie).residents;
    amount[specie] = target.filter((elemnt) => elemnt.sex === sex).length;
    return amount[specie];
  }
  return amount[specie];
}

module.exports = countAnimals;
console.log(countAnimals());
