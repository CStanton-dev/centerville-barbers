export default function IsOpen() {
  const date = new Date()
  const options = {
    weekday: 'long',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }

  const now = date.toLocaleString('en-US', options)

  let status = 'closed';

  const getTimeStamp = {
    day: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  }

  /** Day Constants */
  const sunday = (getTimeStamp.day == 0);
  const monday = (getTimeStamp.day == 1);
  const tuesday = (getTimeStamp.day == 2);
  const wednesday = (getTimeStamp.day == 3);
  const thursday = (getTimeStamp.day == 4);
  const friday = (getTimeStamp.day == 5);
  const saturday = (getTimeStamp.day == 6);

  /** Range Constants */
  const minuteRange = (getTimeStamp.minute <= 59);
  const sundayHoursRange = (11 <= getTimeStamp.hour <= 17);
  const mondayHoursRange = (10 <= getTimeStamp.hour <= 18);
  const weekdayHoursRange = (8 <= getTimeStamp.hour <=  18);
  const saturdayHoursRange = (8 <= getTimeStamp.hour <= 16);

  if (sunday && sundayHoursRange && minuteRange) {
    status = 'open';
  } else if (monday && mondayHoursRange && minuteRange) {
    status = 'open';
  } else if ((tuesday || wednesday || thursday || friday) && weekdayHoursRange && minuteRange) {
    status = 'open';
  } else if (saturday && saturdayHoursRange && minuteRange) {
    status = 'open';
  } else {
    status = 'closed';
  }
  
  return (
    <div>
      <p id='time'>It is {now} we are {status}!</p>
    </div>
  )
}