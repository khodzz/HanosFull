import React from "react";
import "./HeaderBottom.scss";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useDispatch } from "react-redux";
import { CiSearch } from "react-icons/ci";

const HeaderBottom = () => {
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <div className="header__bottom">
      <div className="container header__bottom-container">
        <div className="header__bottom-row">
          <Link to="/promotions" className="header__bottom-row-link">
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
