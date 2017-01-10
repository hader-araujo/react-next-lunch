import axios from "axios"

import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_RESTAURANTS, FETCH_RESTAURANTS_REJECTED } = ACTIONS_TYPE

export function fetchRestaurants(dispatch) {

	const url = `http://localhost:8080/nextlunchapi/restaurant`

		console.log("------------------------ACCESSING URL " + url)
		
        axios.get(url)
        .then(function (response) {
			dispatch(
				{
					type: FETCH_RESTAURANTS,
					payload: {
						restaurants: JSON.stringify(response.data)
					}
				}
			)
        })

        .catch(function (error) {
            dispatch( {
                type: FETCH_RESTAURANTS_REJECTED,
                payload: error
            } )
        })
}