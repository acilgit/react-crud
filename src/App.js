import React, {Component} from 'react';
import {NavLink,Link, Route} from 'react-router-dom';

import './App.css';
import Games from "./containers/Games";
import Home from "./containers/Home";
import GameForm from "./containers/GameForm";

class App extends Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui three item menu">
                    <NavLink className="item" exact to="/">Home</NavLink>
                    <NavLink className="item" exact to="/games">Games</NavLink>
                    <NavLink className="item" to="/games/new">Add new Game</NavLink>
                </div>
                <Route path="/" component={Home} exact/>
                <Route path="/games" exact component={Games}/>
                <Route path="/games/new" component={GameForm}/>
                <Route path="/game/:_id" component={GameForm}/>
            </div>
        );
    }
}

export default App;
