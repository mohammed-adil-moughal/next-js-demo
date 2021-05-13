import styles from '../styles/Home.module.css'

const Card = ({ firstName, lastName, image, email, uuid }) => {
  const redirect = "/people/" + uuid;
  return (
    <div className={styles.card}>
      <img src={image} />
      <div className={styles.container}>
        <p> Name: {firstName} {lastName}</p>
        <p> Email: {email}</p>
        <a className={styles.abutton} href={redirect}>View more</a>
      </div>

    </div>

  )
}
export default Card 