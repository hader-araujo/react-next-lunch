import React from "react";
import { connect } from "react-redux"

import { fetchUsers } from "../actions/UsersActions"

@connect((store) => {

    return {
        users : store.users.users
    };
})
export default class SelectUser extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        fetchUsers(this.props.dispatch.bind(this))
    }
	
	componentWillReceiveProps(nextProps) {

	}

    render(){
        const users = this.props.users
        const li = users.map( (elem) => <li key={elem.id} className="btn btn-default" >{elem.name}</li> )

        return (
            <div id="user-select">
                <h1>Select your user </h1>
                <ul>
                    {li}
                </ul>
            </div>
        );
    }
}