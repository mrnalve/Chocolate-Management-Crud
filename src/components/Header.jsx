import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl font-extrabold">Chocolate Cafe</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/addChocolate'}>Add Chocolate</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Header;