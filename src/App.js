import Navbar from './components/Navbar';
import './App.sass';
import 'bulma';
import Glider from './glider.js';
import BreadCrumbs from './components/BreadCrumbs';
import { useEffect, useState } from 'react';
import Carrousel from './components/Carrousel';
import { searchBaseUri } from './utils';
import SearchList from './components/SearchList';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ShowDetail from './components/ShowDetail';
import ShowSeasons from './components/ShowSeasons';
import ShowCast from './components/ShowCast';

function App() {
  const [searchList, setSearchList] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  const fetchData = () => {
    console.log(searchBaseUri + inputSearch);

    fetch(searchBaseUri + inputSearch)
      .then((response) => response.json())
      .then((body) => {
        console.log(body);
        setSearchList(body);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Router>
      <div className="container">
        <Navbar setInputSearch={setInputSearch} fetchData={fetchData} />
        <BreadCrumbs />
        <Switch>
          <Route exact path="/">
            <Carrousel />
            {!!searchList.length && <SearchList searchList={searchList} />}
          </Route>
          <Route exact path="/shows/:id" component={ShowDetail} />
          <Route exact path="/shows/:id/seasons" component={ShowSeasons} />
          <Route exact path="/shows/:id/cast" component={ShowCast} />
          <Route />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
