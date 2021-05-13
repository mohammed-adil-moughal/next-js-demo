import {call, put} from 'redux-saga/effects';
import { setUsers } from '../../ducks/user';
import {getUsers} from '../requests/user';
export function* handleGetUser(action) {
       try {
        const response = yield getUsers()
        const data = response.data
        yield put(setUsers(data));
    } catch (error) {
       console.log(error) 
    }
}