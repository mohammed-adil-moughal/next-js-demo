import {takeLatest} from 'redux-saga/effects';
import { handleGetUser } from './handler/user';
import { GET_USERS} from '../ducks/user'

export default function* watcherSaga () {
    yield takeLatest(GET_USERS, handleGetUser)
}