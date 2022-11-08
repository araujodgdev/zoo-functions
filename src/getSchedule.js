const data = require('../data/zoo_data');

const weekSchedule = {};
const weekDays = Object.entries(data.hours).map((day) => day[0]);
const weekHours = Object.entries(data.hours).map((day) => day[1]);

const getAnimal = (name) => data.species.find((animal) => animal.name === name);

const getDay = (day) => {
  const daySchedule = {};
  if (day === 'Monday') {
    daySchedule[day] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
    return daySchedule;
  }
  const speciesAvailability = [];
  data.species.forEach((animal) => {
    if (animal.availability.includes(day)) speciesAvailability.push(animal.name);
  });
  daySchedule[day] = {
    officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
    exhibition: speciesAvailability,
  };
  return daySchedule;
};

function wholeSchedule() {
  weekDays.forEach((day, i) => {
    const speciesAvailability = [];
    data.species.forEach((animal) => {
      if (animal.availability.includes(day)) speciesAvailability.push(animal.name);
    });
    weekSchedule[day] = {
      officeHour: `Open from ${weekHours[i].open}am until ${weekHours[i].close}pm`,
      exhibition: speciesAvailability,
    };
    if (day === 'Monday') {
      weekSchedule[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return weekSchedule;
}

function getSchedule(scheduleTarget) {
  const isWeekDay = Object.entries(data.hours).map((day) => day[0]).includes(scheduleTarget);
  const isAnimal = data.species.map((specie) => specie.name).includes(scheduleTarget);

  if (isWeekDay) return getDay(scheduleTarget);

  if (isAnimal) return getAnimal(scheduleTarget).availability;

  return wholeSchedule();
}

module.exports = getSchedule;
