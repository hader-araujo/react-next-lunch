import React from "react";
import { connect } from "react-redux"

import SelectUser from "./SelectUser";
import Vote from "./Vote";
import { fetchUsers } from "../actions/UsersActions"

@connect((store) => {
    return {
        users : store.users.users,
        userSelected : {id: store.user.id, name: store.user.name}

    };
})
export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        fetchUsers(this.props.dispatch.bind(this))
    }

    render(){
        const users = this.props.users
        const idSelected = this.props.userSelected.id
        const nameSelected = this.props.userSelected.name

        return (
            <div>
                <SelectUser users={users} idSelected={idSelected} dispatch={this.props.dispatch.bind(this)}/>
                <Vote idSelected={idSelected} nameSelected={nameSelected}  />
            </div>

        );
    }
}

Main.defaultProps = {
    userSelected: {}
}