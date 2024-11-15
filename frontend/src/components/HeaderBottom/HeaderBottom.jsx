import React from "react";
import "./HeaderBottom.scss";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="header__bottom">
      <div className="container">
        <div className="header__bottom-row">
          <Link className="header__bottom-row-link">
            <p>Promotions</p>
          </Link>
          <Link className="header__bottom-row-link">
            <p>Vegatables & fruit</p>
          </Link>
          <Link className="header__bottom-row-link">
            <p>Convenience</p>
          </Link>
          <Link className="header__bottom-row-link">
            <p>Drinks</p>
          </Link>
          <Link className="header__bottom-row-link">
            <p>Dry groceries</p>
          </Link>
          <Link className="header__bottom-row-link">
            <p>Fish</p>
          </Link>
          <Link className="header__bottom-row-link">
            <p>Meat</p>
          </Link>
        </div>
      </div>
      <div className="header__bottom-line"></div>
    </div>
  );
};

export default HeaderBottom;
