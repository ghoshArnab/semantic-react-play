import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
    ScreenLayout,
    AnotherRoute
} from "./containers";

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ScreenLayout} />
            <Route path="/Route0" component={AnotherRoute} />
        </Switch>
    </BrowserRouter>
    
);
