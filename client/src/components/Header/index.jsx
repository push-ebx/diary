import styles from './styles.module.scss'
import logo from '@/assets/icons/logo.svg'
import write from '@/assets/icons/write.svg'
import {Button} from "@/components/Button/index.jsx";

const Header = ({handleButton}) => {
  return (
    <header>
      <img src={logo} className={styles.logo}/>
      <Button className={styles.button_write} onClick={handleButton}>
        <span>Написать</span>
      </Button>
      <img onClick={handleButton} src={write} alt="write" className={styles.button_write_icon}/>
    </header>
  )
}

export {Header}