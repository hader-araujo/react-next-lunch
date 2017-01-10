import React from "react";
import {renderIf} from 'react-render-if'

import { vote } from "../actions/VoteActions"

@renderIf(
    x => ! x.props.forSelectUser
)
export default class Vote extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(restaurantId, event){
        vote(restaurantId, this.props.idSelected, this.props.dispatch.bind(this))
    }

    render(){
        const { nameSelected, restaurants} = this.props
        const li = restaurants.map( (elem) => <li key={elem.id} className="btn btn-default" onClick={this.handleClick.bind(this, elem.id)} >{elem.name}</li> )

        return (
            <div id="vote">
                <h1>"{nameSelected}" please select the Restaurant to be voted</h1>
                <ul>
                    {li}
                </ul>
            </div>
        );
    }
}