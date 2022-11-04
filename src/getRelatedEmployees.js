const data = require('../data/zoo_data');

function isManager(id) {
  let managers = data.employees.flatMap((colab) => colab.managers);
  managers = managers.filter((elemnt, i) => managers.indexOf(elemnt) === i);
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  let managed;
  let output;
  if (isManager(managerId)) {
    managed = data.employees.filter((elemnt) => elemnt.managers.includes(managerId));
    output = managed.map((person) => `${person.firstName} ${person.lastName}`);
    return output;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
