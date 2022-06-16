import styles from './styles/businessHours.module.css'

export default function BusinessHours() {
  return (
    <div className={styles.Row}>
      <div className={styles.Col} align='left'>
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
        <p>Sunday</p>
      </div>
      <div className={styles.Col} align='right'>
        <p>10:00 AM - 7:00 PM</p>
        <p>8:00 AM - 7:00 PM</p>
        <p>8:00 AM - 7:00 PM</p>
        <p>8:00 AM - 7:00 PM</p>
        <p>8:00 AM - 7:00 PM</p>
        <p>8:00 AM - 5:00 PM</p>
        <p>11:00 AM - 6:00 PM</p>
      </div>
    </div>
  )
}