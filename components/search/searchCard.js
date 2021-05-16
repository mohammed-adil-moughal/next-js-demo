import styles from '../../styles/Home.module.css'

const Card = ({ firstName, lastName, image, uuid }) => {
  const redirect = "/people/" + uuid;
  return (
    <div className={styles.searchCard} >
      <img className={styles.searchCardImage} src={image} />
      <div className={styles.searchCardContainer}>
        <p> {firstName} {lastName}</p>
        <a className={styles.abutton} href={redirect}>View more</a>
      </div>

    </div>

  )
}
export default Card 