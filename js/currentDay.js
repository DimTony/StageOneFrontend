let currentDate = new Date();

let daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let dayOfWeek = currentDate.getDay();

document.getElementById('currentDay').textContent = daysOfWeek[dayOfWeek];
