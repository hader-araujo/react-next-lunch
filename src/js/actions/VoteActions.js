import axios from "axios"

import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_VOTE, FETCH_VOTE_REJECTED } = ACTIONS_TYPE

export function vote(restaurantId, userId, dispatch) {

	const url = `http://localhost:8080/nextlunchapi/vote`

		console.log("------------------------ACCESSING URL " + url)
		
        axios.post(url, {restaurantId: restaurantId, userId: userId})
        .then(function (response) {
			dispatch(
				{
					type: FETCH_VOTE,
					payload: {
						vote: JSON.stringify(response.data)
					}
				}
			)
        })

        .catch(function (error) {
            dispatch( {
                type: FETCH_VOTE_REJECTED,
                payload: error
            } )
        })
}