import React from "react";
import {renderIf} from 'react-render-if'

@renderIf(
    x => x.props.idSelected
)
export default class Vote extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { nameSelected, restaurants} = this.props
        const li = restaurants.map( (elem) => <li key={elem.id} className="btn btn-default" >{elem.name}</li> )

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