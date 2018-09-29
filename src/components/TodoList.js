import './todolist.scss';
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends Component {
  componentDidMount() {
    const {
      fetchPortfolioType,
      state: {
        selected_portfolio_type
      }
    } = this.props;
    fetchPortfolioType(selected_portfolio_type);
  }

  render() {
    const {
      removePortfolioItem,
      state: {
        selected_portfolio_type,
        portfolio
      }
    } = this.props;

    let items = portfolio[selected_portfolio_type];

    if(!items) return(<p>...loaidng</p>);
    return (
      <ul className="todoCollection">
        {Object.keys(items).map(id => (
          <Todo
            key={id}
            id={id}
            details={items[id].title}
            handleClick={removePortfolioItem}
          />
        ))}
      </ul>
    )
  }
}

TodoList.propTypes = {
  removePortfolioItem: PropTypes.func.isRequired,
  fetchPortfolioType: PropTypes.func.isRequired
}

export default TodoList;
