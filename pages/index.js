import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../components/userCard'
import SearchCard from '../components/search/searchCard'
import { getUsers } from '../redux/ducks/user'
import { sortUsers } from '../redux/ducks/user'

import styles from '../styles/Home.module.css'
import FuzzySearch from 'react-fuzzy'
const Home = () => {
  let users = useSelector(state => state.user.users)

  const sortedUsers = useSelector(state => state.user.sortedUsers)
  if (Object.keys(sortedUsers).length !== 0) {
    users = sortedUsers
  }

  const dispatch = useDispatch()
  const sortAlphabetically = (name) => {

    const newArray = [].concat(users)
    const orgArray = newArray.sort(function (a, b) {
      //default first name sort
      let fieldA = a.name.first.toUpperCase();
      let fieldB = b.name.first.toUpperCase();
      if (name === 'email') {
        fieldA = a.email.toUpperCase();
        fieldB = b.email.toUpperCase();
      }
      if (name === 'last') {
        fieldA = a.name.last.toUpperCase();
        fieldB = b.name.last.toUpperCase();
      }

      if (fieldA < fieldB) {
        return -1;
      } else if (fieldA > fieldB) {
        return 1;
      }
      return 0;
    })
    dispatch(sortUsers(orgArray))
  }
  useEffect(() => { dispatch(getUsers()) }, [])
  if (Object.keys(users).length !== 0) {
    return (
      <div className={styles.parentContainer}>
        <h1>
          Welcome to our list of humans
          </h1>
        <div className={styles.searchHeader}>
          <FuzzySearch
            list={users}
            keys={['name.first', 'name.last']}
            width={500}
            onSelect={() => { }}
            resultsTemplate={(props, state) => {
              return state.results.map((user) =>
                <SearchCard
                  key={user.login.uuid}
                  firstName={user.name.first}
                  lastName={user.name.last}
                  image={user.picture.medium}
                  uuid={user.login.uuid} />
              );
            }}
          />
          <div className={styles.sortContainer}>
            SORT BY
            <button className={styles.abutton} onClick={() => sortAlphabetically('first')}> FIRST NAME </button>
            <button className={styles.abutton} onClick={() => sortAlphabetically('last')}> LAST NAME </button>
            <button className={styles.abutton} onClick={() => sortAlphabetically('email')}> EMAIL </button>
          </div>
        </div>
        <main className={styles.main}>

          <div className={styles.grid}>
            {
              users.map((user) => (
                <UserCard
                  key={user.login.uuid}
                  firstName={user.name.first}
                  lastName={user.name.last}
                  image={user.picture.large}
                  email={user.email}
                  uuid={user.login.uuid} />
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