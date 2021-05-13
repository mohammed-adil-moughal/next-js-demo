import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../components/userCard'
import { getUsers } from '../redux/ducks/user'
import styles from '../styles/Home.module.css'

const Home = () => {
  const users = useSelector(state => state.user.users.results)
  const dispatch = useDispatch()
  useEffect(()=>{ dispatch(getUsers())},[])

  if (users) {
    return (
      <div >
        <main className={styles.main}>
          <h1>
            Welcome to our list of humans
          </h1>
  
          <div className={styles.grid}>
            {
          users.map((user) => (
            <UserCard 
            firstName = {user.name.first}
            lastName = {user.name.last}
            image = {user.picture.large}
            email = {user.email}
            uuid = {user.login.uuid}/>
          ))}
          </div>
        </main>
      </div>
    )
  } else {
    return "Loading State"
  }
  
}
export default Home;