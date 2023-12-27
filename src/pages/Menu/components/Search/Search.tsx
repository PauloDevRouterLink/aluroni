import { Dispatch, FC, SetStateAction, memo, useMemo } from 'react'
import { GoSearch } from 'react-icons/go'
import styles from './styles.module.scss'

type SearchProps = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

const iconProps = { size: 25, color: '#5a5c6f' }

const Search: FC<SearchProps> = ({ search, setSearch }) => {
  const SearchIcon = useMemo(() => <GoSearch {...iconProps} />, [])

  return (
    <div className={styles.search}>
      {SearchIcon}
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
    </div>
  )
}

export default memo(Search)
