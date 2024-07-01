function updateUTCTime() {
  const now = new Date();
  const utcTime = now.toISOString();

  document.getElementById(
    'utc-time'
  ).textContent = `Current UTC Time: ${utcTime}`;
}

function updateCurrentDay() {
  const currentDate = new Date();
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeek = currentDate.getDay();

  document.getElementById(
    'currentDay'
  ).textContent = `Current Day: ${daysOfWeek[dayOfWeek]}`;
}

updateUTCTime();
updateCurrentDay();

setInterval(updateUTCTime, 1000);
setInterval(updateCurrentDay, 1000);
