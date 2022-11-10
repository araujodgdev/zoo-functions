const data = require('../data/zoo_data');

function getEmployee(info) {
  const employeeName = data.employees.find((elemnt) =>
    elemnt.firstName === info.name || elemnt.lastName === info.name);

  const employeeId = data.employees.find((elemnt) =>
    elemnt.id === info.id);

  if (employeeName === undefined) return employeeId;

  return employeeName;
}

function generateInfo(obj) {
  const output = {
    id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    species: obj.responsibleFor.map((animalId) =>
      data.species.find((elemnt) => elemnt.id === animalId).name),
    locations: obj.responsibleFor.map((animalId) =>
      data.species.find((elemnt) => elemnt.id === animalId).location),
  };

  return output;
}

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    const allColabs = [];
    data.employees.forEach((elemnt) => {
      allColabs.push(generateInfo(elemnt));
    });

    return allColabs;
  }

  if (getEmployee(obj) === undefined) {
    throw new Error('Informações inválidas');
  }

  return generateInfo(getEmployee(obj));
}

module.exports = getEmployeesCoverage;
