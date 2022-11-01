const data = require('../data/zoo_data');

const isManager = (employeeId) => data.employees.some((employee) => employee.id === employeeId);

function getEmployeeByName(employeeName) {
  // seu código aqui
}

module.exports = getEmployeeByName;
