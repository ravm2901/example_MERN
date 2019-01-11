import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import AddTask from './components/AddTask';

import { tasks } from './tasks.json';

class App extends Component {

  constructor(){
    super();


    this.state = {
      tasks
    }

    this.handleAddTask = this.handleAddTask.bind(this);
  }



  handleAddTask(task){
      this.setState({
        tasks: [...this.state.tasks, task]
      });
  }

  handleRemoveTask(index){
    this.setState({
      tasks: this.state.tasks.filter((e,i) => {
        return i !== index
      })
    })
  }



  render() {

    const tasks = this.state.tasks.map((task, i) => {
      return (
        <div className="col-xs-4 col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{ task.title }</h3>
              <span className="badge badge-pill badge-danger">{ task.priority }</span>
            </div>
            <div className="card-body">
              <p>{ task.description }</p>
              <p className="strong">{ task.responsible }</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={ this.handleRemoveTask.bind(this, i) }
              >Delete</button>
            </div>
          </div>
        </div>
      )
    })


    return (
      <div className="App">
        <Navigation ntasks={ this.state.tasks.length }/>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              < AddTask onAddTask={this.handleAddTask}/>
            </div>

            <div className="col-md-9">
              <div className="row">
                { tasks }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
