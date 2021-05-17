import {takeLatest} from 'redux-saga/effects';
import { handleGetUser,handleSortUser } from './handler/user';
import { GET_USERS, SORT_USERS} from '../ducks/user'

export default function* watcherSaga () {
    yield takeLatest(GET_USERS, handleGetUser)
    yield takeLatest(SORT_USERS, handleSortUser)
}