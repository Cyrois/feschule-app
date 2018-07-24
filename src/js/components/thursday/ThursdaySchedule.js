import React, {Component} from 'react';
import ScheduleComponent from "../common/ScheduleComponent";

class ThursdaySchedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeslots: [
                1100,
                1130,
                1200,
                1230,
                1300,
                1330,
                1400,
                1430,
                1500,
                1530,
                1600,
                1630,
                1700,
                1730,
                1800,
                1830
            ],
            stages: [
                {
                    name: "AMP",
                    schedule: {
                        1200: "DEF3 AND BRYX",
                        1230: "DEF3 AND BRYX",
                        1300: "PIGEON HOLE",
                        1330: "PIGEON HOLE",
                        1400: "PIGEON HOLE",
                        1430: "JLEON",
                        1500: "JLEON",
                        1530: "JVMPKICKS",
                        1600: "JVMPKICKS",
                        1630: "JVMPKICKS",
                        1700: "SKIITOUR",
                        1730: "SKIITOUR",
                        1800: "SKIITOUR",
                        1830: "STUPID BEACH",
                        1900: "STUPID BEACH",
                        1930: "LION-S",
                        2000: "LION-S",
                    }
                },
                {
                    name: "Living Room",
                    schedule: {
                        1100: "OPENING CEREMONY WITH JOAQOPELLI",
                        1130: "OPENING CEREMONY WITH JOAQOPELLI",
                        1200: "EVERYMAN",
                        1230: "EVERYMAN",
                        1300: "EVERYMAN",
                        1330: "EVERYMAN",
                        1400: "SMALLTOWN DJ'S",
                        1430: "SMALLTOWN DJ'S",
                        1500: "SMALLTOWN DJ'S",
                        1530: "SMALLTOWN DJ'S",
                        1600: "SMALLTOWN DJ'S",
                        1630: "SMALLTOWN DJ'S",
                        1700: "MONKEYTWERK",
                        1730: "MONKEYTWERK",
                        1800: "MONKEYTWERK",
                        1830: "MONKEYTWERK",
                        1900: "BOGL",
                        1930: "BOGL",
                        2000: "BOGL",
                    }
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>Thursday</h2>
                <ScheduleComponent
                    timeslots={this.state.timeslots}
                    stages={this.state.stages}
                    selectStage={this.props.selectStage}
                    facebookImgUrl={this.props.facebookImgUrl}
                    userId={this.props.userId}
                />
            </div>
        )
    }
}

export default ThursdaySchedule;