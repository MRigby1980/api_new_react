import React from 'react';
import Home from './Home';
import About from './About';
import Reports from './Reports';
import StudentReport from './StudentReport';

import { Switch, Route } from 'react-router-dom';

function Main() {
    return (
        <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Reports" component={Reports}/>
            <Route path="/StudentReport" component={StudentReport}/>
        </Switch>
    )
}

export default Main;