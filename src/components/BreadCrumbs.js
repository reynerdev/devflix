import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BreadCrumbs = () => {
  return (
    <>
      <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="shows"> Movie </Link>
          </li>
          <li>
            <Link to="episodes"> Episodes </Link>
          </li>
          <li>
            <Link to="casts"> Cast </Link>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              Breadcrumb
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BreadCrumbs;
