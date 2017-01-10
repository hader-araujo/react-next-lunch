import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_VOTE, FETCH_VOTE_REJECTED } = ACTIONS_TYPE

export default function reducer(state={
    vote: {},
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case FETCH_VOTE: {
            return {...state, fetching: true, vote: JSON.parse(action.payload.vote)}
        }
        case FETCH_VOTE_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }

    }

    return state
}
