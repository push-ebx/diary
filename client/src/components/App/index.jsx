import styles from './styles.module.scss'
import {Header} from "@/components/Header";
import {Main} from "@/components/Main/index.jsx";
import {Footer} from "@/components/Footer/index.jsx";
import {Popup} from "@/components/Popup/index.jsx";
import {useEffect, useState} from "react";
import axios from "axios"

export const URL = 'https://diary-y649.vercel.app'
const App = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  const [notes, setNotes] = useState([])
  const [filter, setFilter] = useState(1)
  const [countPages, setCountPages] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const [isShowMore, setIsShowMore] = useState(false)
  const countOnPage = 6

  useEffect(() => {
    fetchCountNotes()
  }, [])

  useEffect(() => {
    if (isShowMore) {
      setIsShowMore(false)
      return
    }
    fetchCountNotes()
    fetchNotes()
  }, [filter, activePage])

  const fetchCountNotes = async () => {
    const res = await axios.get(`${URL}/api/getCountNotes`)
    setCountPages(Math.ceil(res.data/countOnPage))
  }

  const fetchNotes = async () => {
    const res = await axios.get(`${URL}/api/getNotes?offset=${(activePage-1)*countOnPage}&count=${countOnPage}&latest=${filter}`)
    setNotes(prev => res.data)
  }

  const newNote = note => setNotes(prev => [note, ...prev])

  const onShowMore = async () => {
    setIsShowMore(true)
    const res = await axios.get(`${URL}/api/getNotes?offset=${(activePage)*countOnPage}&count=${countOnPage}&latest=${filter}`)
    setNotes(prev => [...prev, ...res.data])
    setCountPages(prev => prev - 1)
    setActivePage(prev => prev + 1)
  }

  return (
    <div className={styles.app}>
      <Popup newNote={newNote} isOpen={popupIsOpen} onClose={() => setPopupIsOpen(false)}/>
      <Header handleButton={() => setPopupIsOpen(true)}/>
      <Main
        onShowMore={onShowMore}
        changeActivePage={setActivePage}
        activePage={activePage}
        countPages={countPages}
        setFilter={setFilter}
        notes={notes}
      />
      <Footer/>
    </div>
  )
}

export {App}