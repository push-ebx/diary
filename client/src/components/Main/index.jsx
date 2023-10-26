import styles from './styles.module.scss'
import {Button} from "@/components/Button/index.jsx";
import filter_new from "@/assets/icons/filter_new.svg";
import filter_old from "@/assets/icons/filter_old.svg";
import arrow_left from "@/assets/icons/arrow_left.svg";
import arrow_right from "@/assets/icons/arrow_right.svg";
import arrow_up from "@/assets/icons/arrow_up.svg";
import {Card} from "@/components/Card/index.jsx";
import {Notes} from "@/components/Notes/index.jsx";
import {useState} from "react";
import {clsx} from "clsx";

const Main = ({changeActivePage, activePage, countPages, notes, setFilter, onShowMore}) => {
  const [activeFilter, setActiveFilter] = useState(1)

  return (
    <main>
      {}
      <div className={styles.myDiary_filters}>
        <h1 className={styles.myDiary}>Мой дневничок</h1>
        <div className={styles.filters}>
          <Button
            className={clsx(activeFilter === 1 && styles.activeFilter)}
            onClick={() => {
              setActiveFilter(1)
              setFilter(1)
            }}
          >
            <img src={filter_new} alt="filter_new"/>
            <span>Сначала новые</span>
          </Button>
          <Button
            className={clsx(activeFilter === 0 && styles.activeFilter)}
            onClick={() => {
              setActiveFilter(0)
              setFilter(0)
            }}
          >
            <img src={filter_old} alt="filter_old"/>
            <span>Сначала старые</span>
          </Button>
        </div>
      </div>

      <Notes>
        {
          notes && notes.length ?
          notes.map((note, i) => (
            <Card
              key={note.id}
              title={note.title}
              date={new Date(note.datetime).toLocaleDateString()}
              time={new Date(note.datetime).toTimeString().split(' ')[0]}
              isImportant={i === 0}
            >
              {note.content}
            </Card>
          )) :
          <h2>Загрузка...</h2>
        }
      </Notes>

      {activePage < countPages && <Button onClick={onShowMore} className={styles.show_more}>
        Показать больше
      </Button>}

      <div className={styles.pagination}>
        <img
          src={arrow_left}
          alt="arrow_left"
          onClick={() => activePage > 1 && changeActivePage(prev => prev - 1)}
        />
        <div className={styles.page_numbers}>
          {
            new Array(countPages).fill(0).map((_, i) => (
              <span key={i} onClick={() => changeActivePage(i+1)} className={clsx(i+1 === activePage && styles.active)}>
                {i+1}
              </span>)
            )
          }
        </div>
        <img
          src={arrow_right}
          alt="arrow_right"
          onClick={() => activePage < countPages && changeActivePage(prev => prev + 1)}
        />
      </div>

      <Button
        onClick={() => {
          document.body.scrollTop;
          document.documentElement.scrollTop = 0;
        }}
        className={styles.toUp}
      >
        <img src={arrow_up} alt="arrow_up"/>Наверх
      </Button>
    </main>
  )
}

export {Main}