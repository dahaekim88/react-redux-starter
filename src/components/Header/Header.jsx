import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const Header = () => {
  return (
    <ul>
      {routes.map((route) => (
        <li key={route.name}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Header;
