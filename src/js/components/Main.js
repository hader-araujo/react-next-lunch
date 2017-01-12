import React from "react";
import { connect } from "react-redux"
import * as toastr from "toastr"

import Home from "./Home";
import Vote from "./Vote";
import { fetchUsers } from "../actions/UsersActions"
import { fetchRestaurants } from "../actions/RestaurantsActions"
import { winnerOfDay } from "../actions/WinnerOfDayActions"
import { winnersOfWeek } from "../actions/WinnersOfWeekActions"
import { hasVote } from "../actions/HasVoteActions"

@connect((store) => {
    return {
        users : store.users.users,
        restaurants : store.restaurants.restaurants,
        userSelected : {id: store.user.id, name: store.user.name},
        winnerOfDay : store.winnerOfDay.winner,
        winnersOfWeek : store.winnersOfWeek.winners,
        userHasVoted : store.hasVote.hasVote,
        vote : store.vote.vote,

    };
})
export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        fetchUsers(this.props.dispatch.bind(this))
        fetchRestaurants(this.props.dispatch.bind(this))
        winnerOfDay(this.props.dispatch.bind(this))
        winnersOfWeek(this.props.dispatch.bind(this))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userSelected && nextProps.userSelected.id != this.props.userSelected.id){
            hasVote(nextProps.userSelected.id, this.props.dispatch.bind(this))
        }
        if (nextProps.vote && nextProps.vote.id != this.props.vote.id){
            winnerOfDay(this.props.dispatch.bind(this))
            winnersOfWeek(this.props.dispatch.bind(this))
            toastr.info("You voted successfully", 'Voted', {timeOut: 10000, preventDuplicates: true})
        }
    }

    render(){
        const { users, restaurants, userSelected, winnerOfDay, userHasVoted, winnersOfWeek } = this.props
        const forSelectUser = !userSelected.id

        return (
            <div>
                <Home users={users} forSelectUser={forSelectUser} dispatch={this.props.dispatch.bind(this)} winnerOfDay={winnerOfDay} />
                <Vote restaurants={restaurants} forSelectUser={forSelectUser} idSelected={userSelected.id} nameSelected={userSelected.name} userHasVoted={userHasVoted}  winnerOfDay={winnerOfDay} winnersOfWeek={winnersOfWeek} dispatch={this.props.dispatch.bind(this)} />
            </div>

        );
    }
}

Main.defaultProps = {
    userSelected: {}, vote: {}
}