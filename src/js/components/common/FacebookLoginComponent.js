import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

class FacebookLoginComponent extends Component {
    render() {
        return (
            //TODO: submit app review for user_friends
            //https://developers.facebook.com/apps/222612201696822/review-status/
            <div className="App">
                {!this.props.loggedIn ?
                    <FacebookLogin
                        appId="222612201696822"
                        autoLoad
                        callback={this.props.responseFacebook}
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        render={renderProps => (
                            <button onClick={renderProps.onClick}>This is my custom FB button</button>
                        )}
                    />
                    :
                    <img src={this.props.facebookImgUrl} alt="" className="facebook-image"/>
                }
            </div>
        );
    }
}

export default FacebookLoginComponent;
