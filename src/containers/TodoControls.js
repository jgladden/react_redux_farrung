import './todocontrols.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeAllTodo } from '../actions';
import Button from '../components/button';
import { uniqueId } from '../utils/uniqueId';

class TodoControls extends Component {

  componentDidMount() {
    this.todoNameInput.focus();
  }

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo({ 
      id: uniqueId(),
      details: this.todoNameInput.value
    });
    this.todoNameInput.value = '';
  }

  removeAllTodo = e => {
    e.preventDefault();
    this.props.removeAllTodo();
  }

  render() {
    return (
      <div className="collectionControls">
        <p>Edit My To Do List</p>
        <form onSubmit={this.addTodo}>
          <input 
            ref={input => this.todoNameInput = input}
          />
          <Button 
            handleClick={this.addTodo}
            label="Add New To Do"
          />
          <Button
            handleClick={this.removeAllTodo}
            label="Remove All To Dos"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    removeAllTodo,
    addTodo
  }
)(TodoControls);
