import itens from './[itens_menu]'
import styles from './styles.module.scss'

export const MenuItens = () => {
  return (
    <div className={styles.itens}>
      {itens.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}
