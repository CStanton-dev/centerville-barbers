import styles from './styles/scheduleButton.module.css';

export default function ScheduleButton(props) {
  let status = props.status
  let button = {};
  
  if (status == 'unavailable') {
    button = <button className={styles.disabled} disabled>Unavailable</button>
  } else {
    button = <button className={styles.schedule}>Schedule</button>
  }

  return (button)
}