import { Dispatch, FC, SetStateAction } from 'react'
import { GoSearch } from 'react-icons/go'
import styles from './styles.module.scss'

type SearchProps = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

export const Search: FC<SearchProps> = ({ search, setSearch }) => {
  return (
    <div className={styles.search}>
      <GoSearch size={25} color="#5a5c6f" />
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
    </div>
  )
}
