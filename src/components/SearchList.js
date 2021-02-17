import React, { useEffect } from 'react';
import CardMovie from './CardMovie';
import waterfall from 'waterfall.js/src/waterfall';
import Masorny from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import { Link } from 'react-router-dom';

const SearchList = ({ searchList }) => {
  useEffect(() => {
    var elem = document.querySelector('.gridSearch');
    var masonry = new Masorny(elem, {
      // options
      itemSelector: '.item',
      columnWidth: 100,
    });

    imagesLoaded(elem).on('progress', function () {
      masonry.layout();
    });
  });

  return (
    <div className="gridSearch ">
      {searchList.map((element, index) => {
        return (
          <div className="item" key={index}>
            <CardMovie result={element} />
          </div>
        );
      })}
    </div>
  );
};

export default SearchList;
