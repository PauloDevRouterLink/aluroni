import { FC, useState, useEffect } from 'react'
import ListItem from './ListItem'
import MENU from '../../../../data/[items_menu]/[items_menu]'
import styles from './styles.module.scss'

type ListMenuItemsProps = {
  props: {
    search: string
    filtered: number | null
    ordering: string
  }
}

export const ListMenuItems: FC<ListMenuItemsProps> = ({ props }) => {
  const [list, setList] = useState<typeof MENU>(MENU)
  const { ordering, filtered, search } = props

  useEffect(() => {
    const newList = MENU.filter(
      item => getSearchItem(item.title) && getFiltered(item.category.id)
    )

    setList(handleOrder(newList))
  }, [search, filtered, ordering])

  const getSearchItem = (title: string) => {
    const regex = new RegExp(search, 'i')
    return regex.test(title)
  }

  const getFiltered = (id: number) => {
    if (filtered !== null) return filtered === id
    return true
  }

  const handleOrderPropertyIncrement = (
    newList: typeof MENU,
    property: 'size' | 'serving' | 'price'
  ) => {
    return newList.sort((a, b) => (a[property] > b[property] ? 1 : -1))
  }

  const handleOrder = (newList: typeof MENU) => {
    switch (ordering) {
      case 'porcao':
        return handleOrderPropertyIncrement(newList, 'size')
      case 'qtd_pessoas':
        return handleOrderPropertyIncrement(newList, 'serving')
      case 'preco':
        return handleOrderPropertyIncrement(newList, 'price')

      default:
        return newList
    }
  }

  return (
    <div className={styles.list__menu_items}>
      {list.map(item => (
        <ListItem key={item.id} card={item} />
      ))}
    </div>
  )
}
