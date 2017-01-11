import React from "react";

import { selectUser } from "../../actions/SelectUserActions"

export default class SelectUser extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(id, name, event){
        this.props.dispatch(selectUser(id, name))
    }

    render(){
        const users = this.props.users
        const li = users.map( (elem) => <li key={elem.id} className="btn btn-default" onClick={this.handleClick.bind(this, elem.id, elem.name)} >{elem.name}</li> )

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