import React, { useState } from 'react';

const useSeasons = () => {
  const [seasons, setSeasons] = useState([]);

  const filterSeasons = (fetchedList) => {
    let seasonList = [];

    fetchedList.forEach((element) => {
      console.log(element.season, 'Element Season');
      seasonList[element.season - 1] = [...element.season, ...[]];
      seasonList[element.season - 1].push(element);
      console.log(seasonList, 'seasonList');
      // seasonList.push({
      //     season: element.season,
      //     seasonDetail: element,
      // });
    });

    console.log(seasonList);
    setSeasons(seasonList);
  };

  return [seasons, filterSeasons];
};

export default useSeasons;
