import React from 'react';

const BreadCrumbs = () => {
  return (
    <>
      <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#">Shows</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Networks</a>
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
