import styles from './styles.module.scss'
import { clsx } from 'clsx';

const Button = ({className, children, onClick}) => {
  return (
    <button onClick={onClick} className={clsx([styles.button, className])}>
      {children}
    </button>
  )
}

export {Button}