import React from "react";
import * as toastr from "toastr"

export default class ShowResult extends React.Component {
    constructor(props) {
        super(props);
    }

    getResult(){
        const { winnerOfDay }  = this.props

        return winnerOfDay.restaurantName ?
            winnerOfDay.beforeMiddleDay ?
                `The restaurant ${winnerOfDay.restaurantName} is winning with  ${winnerOfDay.quantity}  vote(s)` :
                `The restaurant ${winnerOfDay.restaurantName} is won with  ${winnerOfDay.quantity}  vote(s)` :
            `We do not have any vote yet`
    }

    componentWillReceiveProps(nextProps) {
        const { winnerOfDay }  = this.props

        if (nextProps && nextProps.restaurantId != winnerOfDay.restaurantId && winnerOfDay.restaurantName && ! winnerOfDay.beforeMiddleDay){
            toastr.info(this.getResult(), 'Result for today', {timeOut: 50000, preventDuplicates: true})
        }
    }

    render(){
        const result = this.getResult()

        return (
            <div id="user-select">
                <h3>Result of the day </h3>
                {result}
            </div>
        );
    }
}