import React from 'react';

import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const CardCarrousel = () => {
  const imagesCarrousel = {};
  return (
    <>
      <Carousel
        plugins={[
          'infinite',
          'arrows',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
        ]}
      >
        <img src={imageOne} />
        <img src={imageTwo} />
        <img src={imageThree} />
      </Carousel>
    </>
  );
};

export default CardCarrousel;
