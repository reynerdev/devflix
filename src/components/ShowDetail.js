import React from 'react';
import {
  Link,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
  Route,
} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const ShowDetail = () => {
  const param = useLocation();
  const { path, url } = useRouteMatch();
  console.log(param.state.id, 'ID');
  return (
    <div>
      <div className="box showDetailBox">
        <div className="">
          <h1 className="title">{param.state.name}</h1>
          <figure className="">
            {param.state.image ? (
              <img src={param.state.image.medium} alt="Placeholder" />
            ) : (
              <h1>No Image</h1>
            )}
          </figure>
          <Link
            to={{
              pathname: `${url}/seasons`,
              state: param.state.id,
            }}
          >
            <button className="button is-primary">Episodios</button>
          </Link>
          <Link
            to={{
              pathname: `${url}/cast`,
              state: param.state.id,
            }}
          >
            <button className="button is-primary">Cast</button>
          </Link>
        </div>

        <div>{ReactHtmlParser(param.state.summary)}</div>
      </div>

      <Switch>
        <Route></Route>
      </Switch>
    </div>
  );
};

export default ShowDetail;
