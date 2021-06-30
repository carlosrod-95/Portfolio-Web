import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { InicioWeb } from '../components/inicio/InicioWeb'

export const AppRouter = () => {
    return (
        <Router>
        <div>
            <Switch>

                <Route
                    exact
                    path="/"
                    component={InicioWeb}
                />

                <Redirect
                    to="/"
                />

            </Switch>
        </div>
    </Router>
    )
}
