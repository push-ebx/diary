import styles from './styles.module.scss'
import info from "@/assets/icons/info.svg"
import { clsx } from 'clsx';

const Textarea = ({inputRef, label, className, onChange, value, required}) => {
  return (
    <label>
      <div className={styles.label}>
        <span>{label}</span>
        {
          required &&
          <span className={clsx(required && styles.requiredField)}>
            <img src={info} alt="info"/>
            Обязательное поле
          </span>
        }
      </div>
      <textarea
        ref={inputRef}
        className={clsx(className, required && styles.required)}
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </label>
  )
}

export {Textarea}