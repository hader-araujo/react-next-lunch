import axios from "axios"

import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_WINNER_DAY, FETCH_WINNER_DAY_REJECTED } = ACTIONS_TYPE

export function winnerOfDay(dispatch) {

		const url = `http://localhost:8080/nextlunchapi/winner/day`

		console.log("------------------------ACCESSING URL " + url)

		axios.get(url)
        .then(function (response) {
			dispatch(
				{
					type: FETCH_WINNER_DAY,
					payload: {
						winnerOfDay: JSON.stringify(response.data)
					}
				}
			)
        })

        .catch(function (error) {
            dispatch( {
                type: FETCH_WINNER_DAY_REJECTED,
                payload: error
            } )
        })
}