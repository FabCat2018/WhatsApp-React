import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Chat from "./Chat";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";

import "./App.css";

function App() {
    const [{ user }, dispatch] = useStateValue();

    return (
        // BEM naming convention
        <div className="app">
            {!user ? (
                <Login />
            ) : (
                <div className="app__body">
                    <Router>
                        <Sidebar />

                        <Switch>
                            <Route path="/rooms/:roomId">
                                <Chat />
                            </Route>
                            <Route path="/">
                                <Chat />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            )}
        </div>
    );
}

export default App;
