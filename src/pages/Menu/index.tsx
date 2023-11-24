import { useState } from 'react'
import { Search } from './components/Search'
import { Filter } from './components/Filter'
import { Ordering } from './components/Ordering'
import { ListMenuItems } from './components/ListMenuItems'

import MENU_OPTIONS from './[menu_options]'
import styles from './styles.module.scss'

export const Menu = () => {
  const [searching, setSearching] = useState<string>('')
  const [filter, setFilter] = useState<number | null>(null)
  const [order, setOrder] = useState<string>('')

  return (
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

      <ListMenuItems search={searching} ordering={order} filtered={filter} />
    </section>
  )
}
