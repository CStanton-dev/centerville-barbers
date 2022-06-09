import ScheduleButton from './scheduleButton';
import styles from './styles/pricingCard.module.css';
import utilStyle from '../styles/utils.module.css';

export default function PricingCard(props) {
  return (
    <>
      {props.items.map((item) =>
      <div className={styles.card} key={item.id}>
        <div className={styles.cardHeader}>
          <h2 className={styles.title}>
            {item.title}
          </h2>
          <p className={styles.price}>
            &#x24;{item.price}
          </p>
        </div>
        <div className={styles.cardBody}>
          
          <ul className={styles.list}>
            <li className={utilStyle.muted}>Includes:</li>
            {item.includes.map(i => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <div className={styles.cardFooter}>
          <ScheduleButton status={item.status} />
        </div>
      </div>
      )}
    </>
  )
}