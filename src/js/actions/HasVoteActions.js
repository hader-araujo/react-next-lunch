import axios from "axios"

import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_HAS_VOTE, FETCH_HAS_VOTE_REJECTED } = ACTIONS_TYPE

export function hasVote(userId, dispatch) {

		const url = `http://localhost:8080/nextlunchapi/vote/${userId}`

		console.log("------------------------ACCESSING URL " + url)

		axios.get(url)
        .then(function (response) {
			dispatch(
				{
					type: FETCH_HAS_VOTE,
					payload: {
                        hasVote: Boolean(response.data)
					}
				}
			)
        })

        .catch(function (error) {
            dispatch( {
                type: FETCH_HAS_VOTE_REJECTED,
                payload: error
            } )
        })
}