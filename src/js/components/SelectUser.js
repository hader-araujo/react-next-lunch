import React from "react";
import {renderIf} from 'react-render-if'

import { selectUser } from "../actions/SelectUserActions"

@renderIf(
    x => x.props.forSelectUser
)
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