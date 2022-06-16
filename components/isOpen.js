import styles from './styles/isOpen.module.css'

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

  /** Style Constant */
  let style = styles.closed;

  if (sunday && sundayHoursRange && minuteRange) {
    style = styles.open;
    status = 'open';
  } else if (monday && mondayHoursRange && minuteRange) {
    style = styles.open;
    status = 'open';
  } else if ((tuesday || wednesday || thursday || friday) && weekdayHoursRange && minuteRange) {
    style = styles.open;
    status = 'open';
  } else if (saturday && saturdayHoursRange && minuteRange) {
    style = styles.open;
    status = 'open';
  } else {
    style = styles.closed;
    status = 'closed';
  }
  
  return (
    <div >
      <p>It is {now} we are <span id='time' className={style}>{status}</span>!</p>
    </div>
  )
}