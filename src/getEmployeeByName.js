const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const colabInfo = {};
  if (employeeName === undefined) return colabInfo;

  return data.employees.find((colab) => Object.values(colab).includes(employeeName));
}

module.exports = getEmployeeByName;
