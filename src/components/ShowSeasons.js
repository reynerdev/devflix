import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
        return (
          <div className="Box">
            <h1>{element.season}</h1>
            <h1>{element.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default ShowSeasons;
