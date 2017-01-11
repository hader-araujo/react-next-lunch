import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_WINNERS_WEEK, FETCH_WINNERS_WEEK_REJECTED } = ACTIONS_TYPE

export default function reducer(state={
    winners: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case FETCH_WINNERS_WEEK: {
            if (action.payload.winnersOfWeek != "\"\""){
                return {...state, fetching: true, winners: JSON.parse(action.payload.winnersOfWeek)}
            }else{
                return {...state, fetching: true, winner: {}}
            }
        }
        case FETCH_WINNERS_WEEK_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }
    }

    return state
}
