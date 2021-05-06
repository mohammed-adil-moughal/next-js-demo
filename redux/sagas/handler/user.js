import {call, put} from 'redux-saga/effects';
import { setUsers } from '../../ducks/user';
import {requestGetUser} from '../requests/user';
import axios from 'axios';
export function* handleGetUser(action) {
    console.log("handle is called")
    try {
        console.log("attempt request");
        console.log("anoinf");
        //const resp = await apiCall();
        const response = yield apiCall()
        //console.log("response", response)

        //const {results} = response;
        yield put(setUsers(response));
    } catch (error) {
       console.log(error) 
    }
}

async function apiCall () {
    return await axios.request({
        method : "GET",
        url : "https://randomuser.me/api/?results=50"
    })
}