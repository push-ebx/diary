import styles from './styles.module.scss'
import clock from '@/assets/icons/time.svg'
import calendar from '@/assets/icons/calendar.svg'
import { clsx } from 'clsx';

const Card = ({className, children, title, time, date, isImportant}) => {
  return (
    <div className={clsx([styles.card, className, isImportant && styles.isImportant])}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content_date_time}>
        <p className={styles.content}>{children}</p>
        <div className={styles.date_time}>
          <div className={styles.date}><img src={calendar} alt="calendar"/>{date}</div>
          <div className={styles.time}><img src={clock} alt="time"/>{time}</div>
        </div>
      </div>
    </div>
  )
}

export {Card}