import React, {Component} from "react";
import { Provider } from "react-redux";
import store from "./js/store/index";
import HomeComp from "./js/components/home/HomeComp";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HomeComp />
            </Provider>
        );
    }
}

export default App;
