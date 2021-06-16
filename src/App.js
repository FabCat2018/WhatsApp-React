import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Chat from "./Chat";
import Sidebar from "./Sidebar";

import "./App.css";

function App() {
    return (
        // BEM naming convention
        <div className="app">
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
        </div>
    );
}

export default App;
