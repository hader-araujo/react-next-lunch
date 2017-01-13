import React from "react";
import * as toastr from "toastr"
import {renderIf} from 'react-render-if'

import { vote } from "../actions/VoteActions"
import { clearUser } from "../actions/SelectUserActions"
import { clearVoteError } from "../actions/VoteActions"

@renderIf(
    x => ! x.props.forSelectUser
)
export default class Vote extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.voteError && nextProps.voteError.response && nextProps.voteError.response.status == 400){
            toastr.warning("It look like you are voting after midday", 'Warning', {timeOut: 10000, preventDuplicates: true})
        }
    }

    handleReturn(){
        this.props.dispatch(clearUser())
        this.props.dispatch(clearVoteError())
    }

    handleClick(restaurantId, event){
        vote(restaurantId, this.props.idSelected, this.props.dispatch.bind(this))
    }

    canBeVoted(restaurantId){
        const { userHasVoted, winnersOfWeek } = this.props

        if ((new Date()).getHours() >= 12){
            return false;
        }

        return userHasVoted? false : winnersOfWeek.map( (elem) => elem.restaurantId).includes(restaurantId) ? false : true
    }

    getClassName(restaurantId){
        let className = "btn btn-default " + (this.canBeVoted(restaurantId)? " " : " disabled")
        return className
    }

    render(){
        const { nameSelected, restaurants, userHasVoted, winnerOfDay } = this.props

        const h1Value = nameSelected + (((new Date()).getHours() >= 12) ?
                ", you cannot vote anymore because it is after midday" :
                userHasVoted? ", you already voted today" : ", please select the Restaurant to be voted")

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
                    <button className="btn btn-primary " onClick={this.handleReturn.bind(this)} >Return without vote</button>
                </div>
            </div>

        );
    }
}