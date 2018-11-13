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
    setRoute
  } = props;

  return (
    <section 
      id="portfolioDetail"
      className={id ? 'detailView' : ''}
    >
      {id &&
      <div id='portfolioDetailContent'>
        <div id='portfolioItemDetails'>
          <div id='detailNav'>
            <p 
              id='detailNav__closeBtn'
              onClick={() => setRoute(`/portfolio/${type}`)}
            >
            </p>
            <p 
              id='detailNav__type'
            >
              {type.toUpperCase()}
            </p>
            <ul>
              <li 
                id='detailNav__prevBtn'
                onClick={() => setRoute(`/portfolio/${type}/${prevId}`)}
              ></li>
              <li 
                id='detailNav__nextBtn'
                onClick={() => setRoute(`/portfolio/${type}/${nextId}`)}
              ></li>
            </ul>
          </div>
          <h5 id='detailTitle'>
            {title}
          </h5>
          <div 
            id='detailDescription'
            dangerouslySetInnerHTML={ {__html: description} } 
          />
          {link !== '' &&
          <a 
            id='detailLinkBtn' 
            target='new' 
            href={link}
          >
          visit website
          </a>
          }
        </div>
        <div id='portfolioDetailImageWrapper'>
          <ul className={`slideNum${slidenum}`}>
            {range(slidenum).map(num => {
              let displaynum = slidenum === '1' ? '' : num + 1;
              return (
                <li key={num}>
                  <img src={`${imgPath}${imagename}${displaynum}.jpg`} />
                </li>
              );
            }) }
          </ul>
        </div>
      </div>
      }
    </section>
  );
};

Detail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    slidenum: PropTypes.string,
    imagename: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  nextId: PropTypes.string,
  prevId: PropTypes.string,
  setRoute: PropTypes.func.isRequired
};

export default Detail;
