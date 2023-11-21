import { FC, Dispatch, SetStateAction } from 'react'
import classNames from 'classnames'
import Menu_options from '../../[menu_options]'

import styles from './styles.module.scss'

type Option = (typeof Menu_options)[0]

type FilterProps = {
  listFilter: Array<Option>
  filtered: number | null
  setFiltered: Dispatch<SetStateAction<number | null>>
}

const Filter: FC<FilterProps> = ({ listFilter, filtered, setFiltered }) => {
  const selectFilter = (option: Option) => {
    if (filtered === option.id) return setFiltered(null)
    return setFiltered(option.id)
  }

  return (
    <div className={styles.filter}>
      {listFilter?.map(option => (
        <button
          key={option.id}
          className={classNames({
            [styles.filter__item]: true,
            [styles['filter__item--active']]: filtered === option.id,
          })}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export { Filter }
