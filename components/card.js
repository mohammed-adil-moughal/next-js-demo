import styles from '../styles/Home.module.css'

const Card = ({firstName, lastName, image}) => {
    return (
        <a href="https://nextjs.org/docs" className={styles.card}>
        <h2>First Name {firstName}</h2>
        <p>Last Name {lastName}</p>
        <img src={image}/>
      </a>

    )
}
export default Card 