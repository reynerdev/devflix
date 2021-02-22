import React, { useState } from 'react';

const useSeasons = () => {
  const [seasons, setSeasons] = useState([]);

  const filterSeasons = (fetchedList) => {
    let seasonList = [];

    fetchedList.forEach((element) => {
      if (seasonList[element.season - 1] === undefined) {
        seasonList[element.season - 1] = [];
      } else {
        seasonList[element.season - 1].push(element);
      }

      //   console.log(element.season, 'Element Season');

      //   seasonList[0] = [...seasonList];
      //   //   seasonList[element.season - 1] = [...seasonList[element.season], ...[]];
      //   seasonList[element.season - 1].push(element);
      //   console.log(seasonList, 'seasonList');
      // seasonList.push({
      //     season: element.season,
      //     seasonDetail: element,
      // });
    });

    console.log(seasonList, 'SEASON LIST');
    setSeasons(seasonList);
  };

  return [seasons, filterSeasons];
};

export default useSeasons;
