import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/"> Mateus 09</Link>
      <Link to="/"> Salmos 121</Link>
      <Link to="/"> Provérbios 16</Link>
    </Nav>
  );
}
