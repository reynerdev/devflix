import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
const CardMovie = ({ result }) => {
  console.log(result);

  return (
    <Link to={{ pathname: '/shows/' + result.show.id, state: result.show }}>
      <div className="card">
        <div className="card-image">
          <figure className="image x">
            {result.show.image ? (
              <img src={result.show.image.medium} alt="Placeholder" />
            ) : (
              <h1>No Image</h1>
            )}
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{result.show.name}</p>
              <span className="tag is-success">
                {result.show.rating.average
                  ? result.show.rating.average
                  : 'No info'}
              </span>
              {/* <p className="subtitle is-6">{result.show.rating.average}</p> */}
            </div>
          </div>

          <div className="content">
            {ReactHtmlParser(result.show.summary)}
            <br />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
