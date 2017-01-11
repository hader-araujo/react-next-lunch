import { combineReducers } from "redux"

import users from "./usersReducer"
import restaurants from "./restaurantsReducer"
import user from "./userReducer"
import vote from "./voteReducer"
import winnerOfDay from "./winnerOfDayReducer"
import winnersOfWeek from "./winnersOfWeekReducer"
import hasVote from "./hasVoteReducer"

export default combineReducers({
    users, user, restaurants, vote, winnerOfDay, winnersOfWeek, hasVote
})