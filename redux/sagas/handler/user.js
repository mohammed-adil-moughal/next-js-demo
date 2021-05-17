import {call, put} from 'redux-saga/effects';
import { setUsers, sortUsers } from '../../ducks/user';
import {getUsers} from '../requests/user';
import sortAlphabetically from '../../../utilities/sort'
export function* handleGetUser(action) {
       try {
        const response = yield getUsers()
        const data = response.data
        yield put(setUsers(data));
    } catch (error) {
       console.log(error) 
    }
}

export function* handleSortUser(action) {
    try {
      const sortedUsers = sortAlphabetically(action.sortedUsers, action.sortField);
      let data = {
          'results':sortedUsers
      }
      yield put(setUsers(data));

 } catch (error) {
    console.log(error) 
 }
}