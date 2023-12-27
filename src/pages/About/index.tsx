import styles from './styles.module.scss'

const About = () => {
  const images = ['/assets/massa1.png', '/assets/massa2.png']

  return (
    <section>
      <h3 className={styles.about__title}>Sobre Nos</h3>

      <div className={styles.about_us}>
        <img src="/assets/casa.png" alt="Casa Aluroni" />

        <div className={styles.about_us__text}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.about_images}>
        {images.map((item, index) => (
          <div key={index} className={styles.about_images__image}>
            <img src={item} alt="Imagens de massas" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
