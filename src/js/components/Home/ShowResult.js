import React from "react";

export default class ShowResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){

        const { winnerOfDay }  = this.props

        const result = winnerOfDay.restaurantName ?
            winnerOfDay.beforeMiddleDay ?
            `The restaurant ${winnerOfDay.restaurantName} is winning with  ${winnerOfDay.quantity}  vote(s)` :
            `The restaurant ${winnerOfDay.restaurantName} is won with  ${winnerOfDay.quantity}  vote(s)` :
            `We do not have any vote yet`
        return (
            <div id="user-select">
                <h1>Result of the day </h1>
                {result}
            </div>
        );
    }
}