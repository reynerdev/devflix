import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Season from './Season';

const ShowSeasons = () => {
  const [listSeasons, setListSeasons] = useState([]);

  const params = useLocation();

  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${params.state}/episodes`)
      .then((response) => response.json())
      .then((body) => {
        console.log('seasons');
        setListSeasons(body);
        console.log(body);
      })
      .catch((e) => console.log(e));
  }, [params]);
  return (
    <div>
      {listSeasons.map((element) => {
        return <Season element />;
      })}
    </div>
  );
};

export default ShowSeasons;
