import { combineReducers } from "redux"

import users from "./usersReducer"
import restaurants from "./restaurantsReducer"
import user from "./userReducer"
import vote from "./voteReducer"

export default combineReducers({
    users, user, restaurants, vote
})