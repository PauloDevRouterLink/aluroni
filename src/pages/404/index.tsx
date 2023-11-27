import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/NavBar'
import { Button } from '../../components/Button'

import Logotipo from '../../assets/logo.svg'
import LogoNotFound from '../../assets/not_found.svg'

import styles from './styles.module.scss'

export const NotFound = () => {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <main>
      {params.id ? null : <NavBar imageUrl={Logotipo} />}

      <div className={styles.back_to__button}>
        <Button
          label="Voltar"
          icon={FaArrowLeftLong}
          onClick={() => navigate(-1)}
        />
      </div>

      <section className={styles.not_found}>
        <img src={LogoNotFound} alt="" />
      </section>

      {params.id ? null : <Footer logoUrl={Logotipo} />}
    </main>
  )
}
