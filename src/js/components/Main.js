import React from "react";
import { connect } from "react-redux"

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
        winnersOfWeek : store.winnersOfWeek,
        userHasVoted : store.hasVote.hasVote,

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
    }

    render(){
        const { users, restaurants, userSelected, winnerOfDay, userHasVoted } = this.props
        const forSelectUser = !userSelected.id

        return (
            <div>
                <Home users={users} forSelectUser={forSelectUser} dispatch={this.props.dispatch.bind(this)} winnerOfDay={winnerOfDay} userHasVoted={userHasVoted} />
                <Vote restaurants={restaurants} forSelectUser={forSelectUser} idSelected={userSelected.id} nameSelected={userSelected.name} dispatch={this.props.dispatch.bind(this)} />
            </div>

        );
    }
}

Main.defaultProps = {
    userSelected: {}, vote: {}
}