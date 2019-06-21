import './styles.scss';
import React from 'react';
import { connect } from 'react-redux';
import { setRoute } from 'actions';
import { getItemById } from 'reducers';
import PropTypes from 'prop-types';
import { imgPath } from 'config';

const Detail = ({item, setRoute}) => {
  const {
    id,
    title,
    type,
    imageorder,
    link,
    description,
    nextId,
    prevId
  } = item;

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
          <ul className={`slideNum${imageorder.length}`}>
            {imageorder.map(image => (
              <li key={image}>
                <img src={`${imgPath}${image}`} />
              </li>
            ))}
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
    imageorder: PropTypes.array,
    link: PropTypes.string,
    description: PropTypes.string,
    nextId: PropTypes.string,
    prevId: PropTypes.string
  }).isRequired,
  setRoute: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  item: getItemById(state)
});

export default connect(
  mapStateToProps,
  {
    setRoute
  }
)(Detail);

