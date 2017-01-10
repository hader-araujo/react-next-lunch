import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_USERS, FETCH_USERS_REJECTED } = ACTIONS_TYPE

export default function reducer(state={
    users: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case FETCH_USERS: {

            return {...state, fetching: true, users: JSON.parse(action.payload.users)}
        }
        case FETCH_USERS_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }

    }

    return state
}
