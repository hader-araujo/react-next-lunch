import axios from "axios"

import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_USER, FETCH_USER_REJECTED } = ACTIONS_TYPE

export function selectUser(id, name) {
    return{
        type: FETCH_USER,
        payload: {
            id: id,
            name: name
        }
    }
}