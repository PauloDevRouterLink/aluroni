import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'

import Logotipo from '../../assets/logo.svg'
import LogoNotFound from '../../assets/not_found.svg'

import styles from './styles.module.scss'

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <main>
      <NavBar imageUrl={Logotipo} />

      <div className={styles.back_to__button}>
        <button onClick={() => navigate('/')}>
          <FaArrowLeftLong /> voltar
        </button>
      </div>

      <section className={styles.not_found}>
        <img src={LogoNotFound} alt="" />
      </section>

      <Footer logoUrl={Logotipo} />
    </main>
  )
}
