import React, {Component} from 'react';
import '../../../css/App.css';
import ThursdaySchedule from "../thursday/ThursdaySchedule";
import FacebookLoginComponent from "../common/FacebookLoginComponent";

//uses:
//https://www.npmjs.com/package/react-facebook-login
//https://www.npmjs.com/package/react-dom

class HomeComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            facebookImgUrl: "",
            userId: "",
            timeTables: []
        };

        this.responseFacebook = this.responseFacebook.bind(this);
        this.selectStage = this.selectStage.bind(this);
    }

    responseFacebook(response) {
        console.log(response);
        if(response) {
            this.setState({
                userId: response.userID,
                facebookImgUrl: response.picture.data.url,
                loggedIn : true
            })
        }
    }

    selectStage(e, stage, timeslot) {
        console.log("selected stage...");
        let userAlreadyExists = false;
        let users = this.state.timeTables;
        // for (let user in users) {
        //     if (user.userId === this.props.userId) {
        //         userAlreadyExists = true;
        //         break;
        //     }
        // }
        if (!userAlreadyExists) {
            users.push({
                userId: this.props.userId,
                facebookImgUrl: this.props.facebookImgUrl
            });
            this.setState({
                users: users
            });
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Shambhala Set Times</h1>
                    <FacebookLoginComponent
                        responseFacebook={this.responseFacebook}
                        loggedIn={this.state.loggedIn}
                        facebookImgUrl={this.state.facebookImgUrl}/>
                </header>
                <div className="App-intro">
                    <ThursdaySchedule
                        selectStage={this.selectStage}
                        userId={this.state.userId}
                        facebookImgUrl={this.state.facebookImgUrl}
                    />
                </div>
            </div>
        );
    }
}

export default HomeComp;
