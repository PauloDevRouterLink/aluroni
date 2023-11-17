import Logotipo from '../../assets/logo.svg'
import styles from './styles.module.scss'

export const Menu = () => {
  return (
    <main>
      <nav className={styles.menu}>
        <img src={Logotipo} alt="logo aluroni" />
        <h1>Aluroni</h1>
      </nav>
    </main>
  )
}
