import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/Aviva/mateus"> Mateus 09</Link>
      <Link to="/Aviva/Salmos"> Salmos 121</Link>
      <Link to="/Aviva/proverbios"> Provérbios 16</Link>
    </Nav>
  );
}
