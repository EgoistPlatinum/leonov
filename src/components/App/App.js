import React from "react";
import './App.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import * as PropTypes from "prop-types";
import MainPage from "../pages/MainPage/MainPage";
import Moderation from "../pages/Moderation/Moderation";


Switch.propTypes = {children: PropTypes.node};

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/moderation" component={Moderation} />
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
