import React, {Component} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import home from "./pages/home/home";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={home}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
