import Link from 'next/link';
import styles from './styles/scheduleButton.module.css';

export default function ScheduleButton(props) {
  let status = props.status
  let button = {};
  
  if (status == 'unavailable') {
    button = <button className={styles.disabled} disabled>Unavailable</button>
  } else {
    button = 
      <Link href='/schedule' passHref>
        <a className={styles.schedule}>
          Schedule
        </a>
      </Link>
  }

  return (button)
}