import MENU from '../../data/[items_menu]/[items_menu]'

import styles from './styles.module.scss'

export const Home = () => {
  let platesRecommended = [...MENU]

  platesRecommended = platesRecommended
    .sort(() => 0.5 - Math.random())
    .splice(0, 3)

  return (
    <section className={styles.home__container}>
      <h3 className={styles.home__title}>Recomendações da cozinha</h3>

      <div className={styles.home_recommended}>
        {platesRecommended.map(item => (
          <div key={item.id} className={styles.home_recommend}>
            <div className={styles.home_recommend__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.home_recommend__button}>Ver Mais</button>
          </div>
        ))}
      </div>

      <h3 className={styles.home__title}>Nossa casa</h3>

      <div className={styles.our_home}>
        <img src="/assets/nossa_casa.png" alt="Casa do Aluroni" />
        <div className={styles.our_home__address}>
          Rua Vergueiro, 3185 <br />
          <br /> Vila Mariana, SP
        </div>
      </div>
    </section>
  )
}
