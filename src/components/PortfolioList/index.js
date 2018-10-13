import './styles.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../PortfolioItem';
import Loading from '../Loading';
import Error from '../Error';

class PortfolioList extends Component {
  componentDidMount() {
    this.props.fetchPortfolio();
  }

  render() {
    const {
      type,
      items,
      fetching,
      error,
      setSection
    } = this.props;

    if(fetching) 
      return (<Loading />);

    if(error)
      return (<Error error={error} />);
    
    const itemIds = Object.keys(items);

    return (
      <div id="portfolioList">
        <h1>Portfolio / {type}</h1>
        {itemIds.length ? (
          <ul>
            {itemIds.map(id => (
              <PortfolioItem
                key={id}
                {...items[id]}
                handleClick={() => setSection({primary: 'portfolio', secondary: type, tertiary: id})}
              />
            ))}
          </ul>
        ) : (
          <p>No items found.</p>
        )}
      </div>
    );
  }
}

PortfolioList.propTypes = {
  fetchPortfolio: PropTypes.func.isRequired,
  setSection: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
  error: PropTypes.string,
  fetching: PropTypes.number
};

export default PortfolioList;
