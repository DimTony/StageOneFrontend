function updateUTCTime() {
  const now = new Date();
  const utcTime = now.toISOString();

  document.getElementById(
    'utc-time'
  ).textContent = `Current UTC Time: ${utcTime}`;
}

updateUTCTime();

setInterval(updateUTCTime, 1000);
