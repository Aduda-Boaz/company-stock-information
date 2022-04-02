import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { MdKeyboardVoice } from 'react-icons/md';
import PropTypes from 'prop-types';
import './styles/Nav.css';

const Nav = ({ title }) => (
  <header className="header">
    {
      (title !== 'Stock Companies Information') ? <NavLink to="/company-profile"><IoIosArrowBack data-testid="back" /></NavLink> : <p />
    }

    {
      title && <p>{title}</p>
    }
    <ul className="icons">
      <li><MdKeyboardVoice /></li>
      <li><FiSettings /></li>
    </ul>
  </header>
);

Nav.propTypes = {
  title: PropTypes.string,
};
Nav.defaultProps = {
  title: 'Stock Companies Information',
};
export default Nav;
