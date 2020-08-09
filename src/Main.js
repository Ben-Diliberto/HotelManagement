import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./Stuff";
 
class Main extends Component {
    render() {
        return (
            <HashRouter>
                <ul class="sidenav sidenav-fixed">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><div class="divider"></div></li>
                    <li><a class="subheader">Other Stuff</a></li>
                    <li><NavLink class="waves-effect" to="/stuff">stuff</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                </div>
            </HashRouter>
        );
    }
}

export default Main;