import Navbar from './components/Navbar';
import './App.sass';
import 'bulma';
import Glider from './glider.js'
import BreadCrumbs from './components/BreadCrumbs';
import { useEffect, useState } from 'react';
import Carrousel from './components/Carrousel';
import {searchBaseUri} from './utils'
import SearchList from './components/SearchList';


function App() {
  

 const [searchList,setSearchList] = useState([])
 const [inputSearch, setInputSearch] = useState('') 

const fetchData = () => {

  console.log(searchBaseUri+inputSearch)

  fetch(searchBaseUri + inputSearch).then(response=>response.json()).then(body=> {console.log(body);setSearchList(body)}).catch(e=>console.log(e))
}


  return (
    <div className="container">
      <Navbar setInputSearch={setInputSearch} fetchData={fetchData} />
      <BreadCrumbs />
      <Carrousel/>
      { !!searchList.length && <SearchList searchList={searchList} /> }
      
    </div>
  );
}

export default App;
