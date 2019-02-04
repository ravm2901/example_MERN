import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Tasks from './components/Tasks';
import About from './components/About';

//import { tasks } from './tasks.json';

class App extends Component {

  constructor(){
    super();

    this.state = {
      tasks: []
    }

  }









  componentDidMount(){
    this.getTasks();
  }









  getTasks = _ => {
    fetch('http://localhost:4000/api/tasks')
      .then(response => response.json())
      .then(response => this.setState({
          tasks: response.data
        }))
      .catch(err => console.error(err))
  }









  render() {


    return (
      <div className="App">
        <Navigation ntasks={ this.state.tasks.length } />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tasks" render={() => <Tasks getTasks={this.getTasks} tasks={this.state.tasks} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
