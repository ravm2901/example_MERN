import React, { Component } from 'react';

import './AddTask.css';

class AddTask extends Component{

  constructor(){

    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 1
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInput(e){

    const { value, name } = e.target;

    this.setState({
      [name] : value
    })
  }


  handleSubmit(e){
    e.preventDefault();

    this.props.onAddTask(this.state);
  }


  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Title" />
          </div>
          <div className="form-group">
            <input type="text" name="responsible" onChange={this.handleInput} className="form-control" placeholder="Responsible" />
          </div>
          <div className="form-group">
            <input type="text" name="description" onChange={this.handleInput} className="form-control" placeholder="Description" />
          </div>
          <div className="form-group">
            <select name="priority" className="form-control" onChange={this.handleInput}>
              <option value="1">low</option>
              <option value="2">medium</option>
              <option value="3">high</option>
            </select>
          </div>
          <div className="form-group">
            <input type="submit" name="send" value="Send" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }

}


export default AddTask;
