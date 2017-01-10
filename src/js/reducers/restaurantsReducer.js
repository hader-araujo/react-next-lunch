import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_RESTAURANTS, FETCH_RESTAURANTS_REJECTED } = ACTIONS_TYPE

export default function reducer(state={
    restaurants: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case FETCH_RESTAURANTS: {
            return {...state, fetching: true, restaurants: JSON.parse(action.payload.restaurants)}
        }
        case FETCH_RESTAURANTS_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }

    }

    return state
}
