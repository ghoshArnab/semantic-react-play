import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
    ScreenLayoutFull,
    AnotherRoute
} from "./containers";

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ScreenLayoutFull} />
            <Route path="/Route0" component={AnotherRoute} />
        </Switch>
    </BrowserRouter>
    
);
