import { FC, Dispatch, SetStateAction, useState, memo } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import classNames from 'classnames'
import OPTIONS_SELECT from './[options_select]'

import styles from './styles.module.scss'

type OrderProps = {
  ordering: string
  setOrdering: Dispatch<SetStateAction<string>>
}

const Ordering: FC<OrderProps> = ({ ordering, setOrdering }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const nameOrdering =
    ordering && OPTIONS_SELECT.find(option => option.value === ordering)?.name

  return (
    <button
      className={classNames(styles.ordering, {
        [styles['ordering--active']]: ordering !== '',
      })}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <span>{nameOrdering || 'Ordenar por'}</span>
      <MdKeyboardArrowUp
        size={20}
        style={{
          transition: '.3s ease-out',
          transform: `rotate(${isOpen ? 0 : 180}deg)`,
        }}
      />
      <div
        className={classNames(styles.ordering__options, {
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

export default memo(Ordering)
