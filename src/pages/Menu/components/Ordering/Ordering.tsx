import { FC, Dispatch, SetStateAction, useState } from 'react'
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import classNames from 'classnames'
import OPTIONS_SELECT from './[options_select]'

import styles from './styles.module.scss'

type OrderProps = {
  ordering: string
  setOrdering: Dispatch<SetStateAction<string>>
}

export const Ordering: FC<OrderProps> = ({ ordering, setOrdering }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const nameOrdering =
    ordering && OPTIONS_SELECT.find(option => option.value === ordering)?.name

  return (
    <button
      className={classNames({
        [styles.ordering]: true,
        [styles['ordering--active']]: ordering !== '',
      })}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <span>{nameOrdering || 'Ordenar por'}</span>
      {isOpen ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdOutlineKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.ordering__options]: true,
          [styles['ordering__options--active']]: isOpen,
        })}
      >
        {OPTIONS_SELECT?.map(option => (
          <div
            key={option.value}
            className={styles.ordering__option}
            onClick={() => setOrdering(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  )
}
