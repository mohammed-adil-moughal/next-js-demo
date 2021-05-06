const INCREMENT = 'increment'
const FETCHDATA = 'fetchdata'

export const increment = () => ({
    type: INCREMENT
})

export const fetchData = () => ({
    type: FETCHDATA
})

const initialState = {
    persons : {},
    count : 2
}

const Counter = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1};
        case FETCHDATA:
            return { ...state, person: action.payload};
        default:
            return state;
    }
}

export default Counter