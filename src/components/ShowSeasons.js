import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useSeasons from '../Hooks/useSeasons';
import Season from './Season';

const ShowSeasons = () => {
  const [listSeasons, setListSeasons] = useState([]);
  const [seasons, filterSeasons] = useSeasons();

  const params = useLocation();

  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${params.state}/episodes`)
      .then((response) => response.json())
      .then((body) => {
        // console.log('seasons');
        filterSeasons(body);
        // console.log(body);
      })
      .catch((e) => console.log(e));
  }, [params]);
  return (
    <div>
      {seasons.map((element, index) => {
        console.log(element.season, 'Season Value');
        return <Season key={index} element={element.season} />;
      })}
    </div>
  );
};

export default ShowSeasons;
