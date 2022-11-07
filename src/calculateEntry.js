const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childAge = (number) => number < 18;
  const adultAge = (number) => number >= 18 && number < 50;
  const seniorAge = (number) => number >= 50;
  const output = {
    child: entrants.filter((person) => childAge(person.age)).length,
    adult: entrants.filter((person) => adultAge(person.age)).length,
    senior: entrants.filter((person) => seniorAge(person.age)).length,
  };

  return output;
}

const isEmpty = (obj) => Object.keys(obj).length === 0;

function calculateEntry(entrants) {
  if (entrants === undefined || isEmpty(entrants)) return 0;
  const peopleByAge = Object.values(countEntrants(entrants));
  const values = [peopleByAge[0] * 20.99, peopleByAge[1] * 49.99, peopleByAge[2] * 24.99];

  const output = values.reduce((sum, price) => sum + price, 0);

  return output;
}

module.exports = { calculateEntry, countEntrants };
