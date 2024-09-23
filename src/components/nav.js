import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/punto-1">Punto 1</Link>
        </li>
        <li>
          <Link to="/punto-2">Punto 2</Link>
        </li>
        <li>
          <Link to="/punto-3">Punto 3</Link>
        </li>
        <li>
          <Link to="/punto-4">Punto 4</Link>
        </li>
        <li>
          <Link to="/punto-5">Punto 5</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
