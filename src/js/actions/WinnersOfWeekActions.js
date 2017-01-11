import axios from "axios"

import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_WINNERS_WEEK, FETCH_WINNERS_WEEK_REJECTED } = ACTIONS_TYPE

export function winnersOfWeek(dispatch) {

		const url = `http://localhost:8080/nextlunchapi/winner/week`

		console.log("------------------------ACCESSING URL " + url)
		
        axios.get(url)
        .then(function (response) {
			dispatch(
				{
					type: FETCH_WINNERS_WEEK,
					payload: {
                        winnersOfWeek: JSON.stringify(response.data)
					}
				}
			)
        })

        .catch(function (error) {
            dispatch( {
                type: FETCH_WINNERS_WEEK_REJECTED,
                payload: error
            } )
        })
}