export const GET_USERS = 'GET_USERS'
const SET_USERS = 'SET_USERS'

export const getUsers = () => ({
    type: GET_USERS
})
// https://randomuser.me/api/?results=50
export const setUsers = (users) => ({
    type: SET_USERS, users: users
})

const initialState = {
    users : {}
}

const Counter = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
            const {users} = action
            return { ...state, users : users};
        default:
            return state;
    }
}

export default Counter