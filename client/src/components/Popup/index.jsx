import styles from './styles.module.scss'
import { clsx } from 'clsx';
import cross from "@/assets/icons/cross.svg"
import {Input} from "@/components/Input";
import {Textarea} from "@/components/Textarea";
import {Button} from "@/components/Button";
import {useEffect, useState} from "react";
import axios from "axios";
import {URL} from '@/components/App'

const Popup = ({isOpen, onClose, newNote}) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    setDate(new Date().toLocaleDateString())
  }, [isOpen])

  const createNote = async () => {
    if (!title.trim().length || !content.trim().length || !date.trim().length) return

    const [day, month, year] = date.trim().split('.')
    const time = new Date().toLocaleTimeString().split(':')

    const note = {
      title,
      content,
      datetime: +new Date(year, month-1, day, ...time)
    }
    console.log(note)

    const res = await axios.post(`${URL}/api/createNote`, note)

    newNote(note)
    onClose()
  }

  const closePopup = () => {
    onClose()
    setTitle('')
    setContent('')
    setDate('')
  }

  return (
    // <div className={styles.active}>
    <div className={clsx(styles.popup, isOpen && styles.active)} onClick={closePopup}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Новая запись</h2>
        <img className={styles.cross} src={cross} alt="cross" onClick={closePopup}/>
        <div className={styles.inputs}>
          <div className={styles.title_date}>
            <Input
              label={'Заголовок'}
              required={!title.trim().length}
              value={title}
              onChange={(value) => {
                value.trim().length <= 200 && setTitle(value)
              }}
            />
            <Input label={'Дата'} required={!date} value={date} onChange={setDate}/>
          </div>
          <Textarea
            label={'Заметка'}
            required={!content.trim().length}
            value={content}
            onChange={(value) => {
              value.trim().length <= 2000 && setContent(value)
            }}
          />
        </div>
        <Button onClick={createNote}>
          Поделиться наболевшим
        </Button>
      </div>
    </div>
  )
}

export {Popup}