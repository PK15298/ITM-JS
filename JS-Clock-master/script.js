function updateClock(clockId, timeZone) {
  const clock = document.getElementById(clockId);
  const hourHand = clock.querySelector('.hour-hand');
  const minuteHand = clock.querySelector('.minute-hand');
  const secondHand = clock.querySelector('.second-hand');

  function setDate() {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', { timeZone: timeZone, hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
      const parts = formatter.formatToParts(now);
      const seconds = parseInt(parts.find(part => part.type === 'second').value, 10);
      const minutes = parseInt(parts.find(part => part.type === 'minute').value, 10);
      const hours = parseInt(parts.find(part => part.type === 'hour').value, 10);

      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

      const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  setInterval(setDate, 1000);
  setDate(); // Initialize the clock
}

updateClock('clock-new-york', 'America/New_York');
updateClock('clock-london', 'Europe/London');
updateClock('clock-tokyo', 'Asia/Tokyo');
updateClock('clock-india', 'Asia/Kolkata');
