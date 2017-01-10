import { combineReducers } from "redux"

import users from "./usersReducer"
import restaurants from "./restaurantsReducer"
import user from "./userReducer"

export default combineReducers({
    users, user, restaurants
})