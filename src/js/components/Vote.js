import React from "react";
import {renderIf} from 'react-render-if'

import { vote } from "../actions/VoteActions"
import { clearUser } from "../actions/SelectUserActions"

@renderIf(
    x => ! x.props.forSelectUser
)
export default class Vote extends React.Component {
    constructor(props) {
        super(props);
    }

    handleReturn(){
        this.props.dispatch(clearUser())
    }

    handleClick(restaurantId, event){
        if (this.canBeVoted(restaurantId)){
            vote(restaurantId, this.props.idSelected, this.props.dispatch.bind(this))
        }
    }

    canBeVoted(restaurantId){
        const { userHasVoted, winnersOfWeek, winnerOfDay} = this.props
        return winnerOfDay.beforeMiddleDay? userHasVoted? false : winnersOfWeek.map( (elem) => elem.restaurantId).includes(restaurantId) ? false : true : false
    }

    getClassName(restaurantId){
        const { userHasVoted, winnersOfWeek } = this.props
        let className = "btn btn-default " + (this.canBeVoted(restaurantId)? " " : " disabled")
        return className
    }

    render(){
        const { nameSelected, restaurants, userHasVoted, winnerOfDay } = this.props

        const h1Value = nameSelected + (winnerOfDay.beforeMiddleDay ? userHasVoted? ", you already voted today" : ", please select the Restaurant to be voted" :
                ", you can not voted anymore because it is after middle day")

        const li = restaurants.map( (elem) => <li key={elem.id} className={this.getClassName(elem.id)} onClick={this.handleClick.bind(this, elem.id)} >{elem.name}</li> )

        return (
            <div>
                <div id="vote" className="row">
                    <h1>{h1Value}</h1>
                    <ul>
                        {li}
                    </ul>
                </div>
                <br/>
                <div className="row">
                    <button className="btn btn-primary " onClick={this.handleReturn.bind(this)} >Return with voting</button>
                </div>
            </div>

        );
    }
}