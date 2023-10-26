import styles from './styles.module.scss'

const Notes = ({children}) => {
  return (
    <div className={styles.notes}>
      {children}
    </div>
  )
}

export {Notes}