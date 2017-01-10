import React from "react";
import {renderIf} from 'react-render-if'

import { selectUser } from "../actions/SelectUserActions"

@renderIf(
    x => x.props.idSelected
)
export default class Vote extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const name = this.props.nameSelected

        return (
            <div id="user-select">
                <h1>{name} Selected</h1>
            </div>
        );
    }
}