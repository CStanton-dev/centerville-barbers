export default function IsOpen() {
  let now = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  const today = weekday[now.getDay()];
  const hour = (now.getHours() + 24) % 12 || 12;
  const minute = now.getMinutes();

  let suffix = hour <= 12 ? ' PM' : ' AM';

  return (
    <div>
      <p id='time'>It is {today + ' ' + hour + ':' + minute + suffix}.</p>
    </div>
  )
}

