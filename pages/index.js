import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FuzzySearch from 'react-fuzzy'
import styled from 'styled-components'

import UserCard from '../components/userCard'
import SearchCard from '../components/search/searchCard'

import { getUsers } from '../redux/ducks/user'
import { sortUsers } from '../redux/ducks/user'

const Container = styled.div`
  padding: 2px 16px;
  box-sizing: border-box;
  
`;
const SearchHeader = styled.div`
  padding: 10px;
`
const SortContainer = styled.div`
  margin-top: 10px;
  padding: 2px;
`
const SortButton = styled.button`
  background-color: #325fb3;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 2px 2px;
`
const UserGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Home = () => {
  let users = useSelector(state => state.user.users)

  const dispatch = useDispatch()
  const sort = (name) => {
    dispatch(sortUsers(users, name))
  }

  useEffect(() => { dispatch(getUsers()) }, [])
  if (Object.keys(users).length !== 0) {
    return (
      <Container>
        <h1>
          Welcome to our list of humans
          </h1>
        <SearchHeader>
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
          <SortContainer>
            SORT BY
            <SortButton onClick={() => sort('first')}> FIRST NAME </SortButton>
            <SortButton onClick={() => sort('last')}> LAST NAME </SortButton>
            <SortButton onClick={() => sort('email')}> EMAIL </SortButton>
          </SortContainer>
        </SearchHeader>
        <main>

          <UserGrid>
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
          </UserGrid>
        </main>
      </Container>
    )
  } else {
    return "Loading State"
  }

}
export default Home;