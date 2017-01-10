import React from "react";
import { connect } from "react-redux"

import SelectUser from "./SelectUser";
import Vote from "./Vote";
import { fetchUsers } from "../actions/UsersActions"
import { fetchRestaurants } from "../actions/RestaurantsActions"

@connect((store) => {
    return {
        users : store.users.users,
        restaurants : store.restaurants.restaurants,
        userSelected : {id: store.user.id, name: store.user.name}

    };
})
export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        fetchUsers(this.props.dispatch.bind(this))
        fetchRestaurants(this.props.dispatch.bind(this))
    }

    render(){
        const { users, restaurants, userSelected} = this.props

        return (
            <div>
                <SelectUser users={users} idSelected={userSelected.id} dispatch={this.props.dispatch.bind(this)}/>
                <Vote restaurants={restaurants} idSelected={userSelected.id} nameSelected={userSelected.name}  />
            </div>

        );
    }
}

Main.defaultProps = {
    userSelected: {}
}