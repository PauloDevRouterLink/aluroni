import { useState } from 'react'
import { Search } from './components/Search'
import { Filter } from './components/Filter'
import { Ordering } from './components/Ordering'

import MENU_OPTIONS from './[menu_options]'
import Logotipo from '../../assets/logo.svg'
import styles from './styles.module.scss'

export const Menu = () => {
  const [searching, setSearching] = useState<string>('')
  const [filter, setFilter] = useState<number | null>(null)
  const [order, setOrder] = useState<string>('')

  return (
    <main>
      <nav className={styles.navbar}>
        <img src={Logotipo} alt="logo aluroni" />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search search={searching} setSearch={setSearching} />

        <div className={styles.menu__filter}>
          <Filter
            listFilter={MENU_OPTIONS}
            filtered={filter}
            setFiltered={setFilter}
          />

          <Ordering ordering={order} setOrdering={setOrder} />
        </div>
      </section>
    </main>
  )
}
