import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_HAS_VOTE, FETCH_HAS_VOTE_REJECTED } = ACTIONS_TYPE

export default function reducer(state={
    hasVote: false,
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case FETCH_HAS_VOTE: {
            return {...state, fetching: true, hasVote: action.payload.hasVote}
        }
        case FETCH_HAS_VOTE_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }

    }

    return state
}
