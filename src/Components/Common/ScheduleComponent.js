import React, {Component} from 'react';
import '../../App.css';

class ScheduleComponent extends Component {
    constructor(props) {
        super(props);

        this.clickCell = this.clickCell.bind(this);

        this.state = {users: []};
    }

    clickCell(e) {
        if (typeof this.props.selectStage === "function") {
            let stage = e.target.dataset.stage;
            let timeslot = e.target.dataset.timeslot;
            this.props.selectStage(e, stage, timeslot);
        }
    }

    render() {
        return (
            <div>
                <table className="margin-auto">
                    <thead>
                    <tr>
                        <th></th>
                        {this.props.stages.map((stage) => {
                            return (
                                <th key={stage.name}>{stage.name}</th>
                            )
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.timeslots.map((timeslot) => {
                        return (
                            <tr key={timeslot}>
                                <td>{timeslot}</td>
                                {this.props.stages.map((stage) => {
                                    return (
                                        <td key={stage.name.toString() + timeslot} className="artist-slot" data-timeslot={timeslot} data-stage={stage} onClick={this.clickCell}>{stage.schedule[timeslot]}
                                            <div className="images">
                                                {this.state.users.map((user) => {
                                                    return (
                                                        <img key={user.userId} src={user.facebookImgUrl} alt="" className="facebook-image"/>
                                                    )
                                                })}
                                            </div>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ScheduleComponent;