export const GET_USERS = 'GET_USERS'
export const SORT_USERS = 'SORT_USERS'
const SET_USERS = 'SET_USERS'

export const getUsers = () => ({
    type: GET_USERS
})
export const sortUsers = (users, name) => ({
    type: SORT_USERS,
    sortedUsers: users,
    sortField: name
})

export const setUsers = (users) => ({
    type: SET_USERS, users: users
})

const initialState = {
    users : {},
    sortedUsers : {}
}

const StateManipulator = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
            const {users} = action
            return { ...state, users : users.results};
        case SORT_USERS:
            const {sortedUsers} = action
            console.log(sortedUsers);
            return { ...state, sortedUsers: sortedUsers}
        default:
            return state;
    }
}

export default StateManipulator