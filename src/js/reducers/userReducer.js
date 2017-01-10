import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_USER, FETCH_USER_REJECTED } = ACTIONS_TYPE

export default function reducer(state={
    id: 0,
    name: "",
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case FETCH_USER: {

            return {...state, fetching: true, id: action.payload.id, name: action.payload.name}
        }
        case FETCH_USER_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }

    }

    return state
}
