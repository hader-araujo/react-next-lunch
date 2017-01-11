import axios from "axios"

import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_USERS, FETCH_USERS_REJECTED } = ACTIONS_TYPE

export function fetchUsers(dispatch) {

    const url = `http://localhost:8080/nextlunchapi/user`

    console.log("------------------------ACCESSING URL " + url)

    axios.get(url)
        .then(function (response) {
            dispatch(
                {
                    type: FETCH_USERS,
                    payload: {
                        users: JSON.stringify(response.data)
                    }
                }
            )
        })

        .catch(function (error) {
            dispatch( {
                type: FETCH_USERS_REJECTED,
                payload: error
            } )
        })
}