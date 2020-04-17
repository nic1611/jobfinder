import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/index'
import New from './pages/New/index'
import Job from './pages/Job/index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/job/new" exact component={New} />
                <Route path="/job/:id" exact component={Job} />
            </Switch>
        </BrowserRouter>
    );
}