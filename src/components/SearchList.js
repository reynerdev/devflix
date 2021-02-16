import React, { useEffect } from 'react'
import CardMovie from './CardMovie'
import waterfall from 'waterfall.js/src/waterfall'
import Masorny from 'masonry-layout'

const SearchList = ({searchList}) => {

    useEffect(()=>{
        var elem = document.querySelector('.gridSearch');
        var masonry = new Masorny( elem, {
      // options
        itemSelector: '.item',   
        columnWidth: 100
        });
        masonry.reloadItems()
    })

 

    
    return (
        <div className="gridSearch">

            {searchList.map((element,index)=>{
            
            return (<div className="item" key={index}>
                <CardMovie  result = {element} />
            </div> )
            })}



    </div>
    )
}

export default SearchList
