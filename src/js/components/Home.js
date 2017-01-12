import React from "react";
import {renderIf} from 'react-render-if'

import SelectUser from "./Home/SelectUser"
import ShowResult from "./Home/ShowResult"

@renderIf(
    x => x.props.forSelectUser
)
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { users, dispatch, winnerOfDay }  = this.props
        return (
            <div id="home">
                <div className="row">
                    <SelectUser users={users} dispatch={dispatch} />
                </div>
                <br/>
                <div className="row">
                    <ShowResult winnerOfDay={winnerOfDay} />
                </div>
            </div>
        );
    }
}