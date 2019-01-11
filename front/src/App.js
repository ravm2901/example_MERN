import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import AddTask from './components/AddTask';

//import { tasks } from './tasks.json';

class App extends Component {

  constructor(){
    super();

    this.state = {
      tasks: []
    }

    this.handleAddTask = this.handleAddTask.bind(this);

  }









  handleAddTask(task){

    fetch('http://localhost:4000/tasks/add',{
      method: 'POST',
      body: JSON.stringify(task),
      headers: {"Content-Type": "application/json"}
    })
      .then((response) => {
        return response.text();
      })
      .then((resp) => {
        if(resp == 'saved'){
          this.getTasks();
        }
      })
  }









  handleRemoveTask(index){

    fetch('http://localhost:4000/tasks/delete',{
      method: 'DELETE',
      body: JSON.stringify({id: this.state.tasks[index].id}),
      headers: {"Content-Type": "application/json"}
    })
      .then((response) => {
        return response.text();
      })
      .then((resp) => {
        if(resp == 'deleted'){
          this.getTasks();
        }
      })
  }









  componentDidMount(){
    this.getTasks();
  }









  getTasks = _ => {
    fetch('http://localhost:4000/tasks')
      .then(response => response.json())
      .then(response => this.setState({
          tasks: response.data
        }))
      .catch(err => console.error(err))
  }









  renderTasks = (task, i) => {

    let priority = 'low';

    switch(task.priority){
      case 2:
        priority = 'medium';
        break;
      case 3:
        priority = 'high';
        break;
    }









    return (
      <div key={task.id} className="col-xs-4 col-md-4">
        <div className="card mt-4">
          <div className="card-header">
            <h3>{ task.title }</h3>
            <span className="badge badge-pill badge-danger">{ priority }</span>
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
  }



  render() {

    const tasks = this.state.tasks.map(this.renderTasks);

    return (
      <div className="App">
        <Navigation ntasks={ this.state.tasks.length }/>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              < AddTask onAddTask={this.handleAddTask} />
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
