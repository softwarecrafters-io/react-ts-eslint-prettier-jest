import {Route, Switch} from "react-router";
import {Routes} from "./routes";
import {Home} from "./home/home";
import {About} from "./about/about";
import * as React from "react";
import {BrowserRouter} from "react-router-dom";

export const Router = () =>
    <BrowserRouter>{Switcher()}</BrowserRouter>

const Switcher = () =>
    <Switch>
        <Route exact path={Routes.home} render={context => <Home/>}/>
        <Route exact path={Routes.about} render={context => <About/>}/>
    </Switch>;
