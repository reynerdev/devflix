import React from 'react';

const Season = ({ element, index }) => {
  console.log(element);

  return (
    <div className="box">
      <p className="title">{`Season  ${index + 1}`}</p>

      {element.map((episode) => {
        return (
          <div className="tile is-ancestor ">
            <div className="tile is-6 is-parent">
              <div className="tile is-child box">
                <p className="title">{episode.name}</p>
              </div>
            </div>
            <div className="tile is-6 is-parent">
              <div className="tile  is-child box">dsdsds</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Season;
