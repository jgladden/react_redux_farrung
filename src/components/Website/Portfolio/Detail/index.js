import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'utils';
import { imgPath } from 'config';

const Detail = props => {
  const {
    item: {
      id,
      title,
      type,
      slidenum,
      imagename,
      link,
      description
    },
    nextId,
    prevId,
    setSection
  } = props;

  console.log(props);

  if(!id) return null;

  const showDetail = id => {
    setSection({primary: 'portfolio', secondary: type, tertiary: id});
  }

return (
<section id='portfolioDetail'>
  <div id='portfolioDetailContent'>
    <div id='portfolioItemDetails'>
      <div id='detailNav'>
        <a id='closePortfolioDetail' href='#'></a>
        <p id='detailType'>{type.toUpperCase()}</p>
        <ul id='detailNavLastNext'>
          <li id='detailLast' onClick={() => showDetail(prevId)}></li>
          <li id='detailNext' onClick={() => showDetail(nextId)}></li>
        </ul>
      </div>
      <div id='detailDescription'>
        <h5>{title}</h5>
        <div dangerouslySetInnerHTML={ {__html: description} } />
        <p id='viewsTitle'>slide views</p>
        <ul id='showPortfolioImage'>
          {range(slidenum).map(num  =>
            <li key={num+1} className='imageSlider'>{num+1}</li>
          )}
          <li><a id='visitWebsite' target='new' href={link}>visit website</a></li>
        </ul>
      </div>
    </div>
    <div id='portfolioDetailImageWrapper'>
      <ul id='portfolioDetailImages'>
        {range(slidenum).map(num => {
         let displaynum = slidenum === '1' ? '' : num + 1;
         return (
          <li key={num} className='portfolioDetailImage'>
            <img src={`${imgPath}${imagename}${displaynum}.jpg`} />
           </li>
         );
       }) }
      </ul>
    </div>
  </div>
</section>
  );
};

Detail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default Detail;
