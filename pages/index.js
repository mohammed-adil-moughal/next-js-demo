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
  const sortAlphabetically = () => {
    const newArray = [].concat(users)
    const orgArray = newArray.sort(function (a, b) {
      var nameA = a.name.first.toUpperCase();
      var nameB = b.name.first.toUpperCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    dispatch(sortUsers(orgArray))
  }
  useEffect(() => { dispatch(getUsers()) }, [])
  if (Object.keys(users).length !== 0) {
    return (
      <div>
        <FuzzySearch
          list={users}
          keys={['name.first', 'name.last']}
          width={430}
          onSelect = {()=>{}}
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
        <main className={styles.main}>
          <h1>
            Welcome to our list of humans
          </h1>
          <div>
            Click to sort by <button onClick={sortAlphabetically}> Name </button>
          </div>
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