import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_WINNER_DAY, FETCH_WINNER_DAY_REJECTED } = ACTIONS_TYPE

export default function reducer(state={
    winner: {},
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case FETCH_WINNER_DAY: {
            if (action.payload.winnerOfDay != "\"\""){
                return {...state, fetching: true, winner: JSON.parse(action.payload.winnerOfDay)}
            }else{
                return {...state, fetching: true, winner: {}}
            }
        }
        case FETCH_WINNER_DAY_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }
    }

    return state
}
