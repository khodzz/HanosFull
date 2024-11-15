import React from "react";
import { assets } from "../../assets/assets";
import "./HeaderCenter.scss";
import { Link } from "react-router-dom";

const HeaderCenter = () => {
  return (
    <div className="header__center">
      <div className="container">
        <div className="header__center-left">
          <img className="header__center-left-logo" src={assets.logo} alt="" />
        </div>
        <div className="header__center-center">
          <img
            className="header__center-center-icon"
            src={assets.loupePurple}
            alt=""
          />
          <input
            className="header__center-center-input"
            type="text"
            placeholder="Find your product..."
          />
          <button className="header__center-center-button">Search</button>
        </div>
        <div className="header__center-right">
          <img
            className="header__center-right-place"
            src={assets.places}
            alt=""
          />
          <div className="header__center-right-text">
            <h3 className="header__center-right-text-first">Find a store</h3>
            <p className="header__center-right-text-second">
              Find your HANOS store
            </p>
          </div>
        </div>
        <div className="header__center-right">
          <img
            className="header__center-right-place"
            src={assets.loginPerson}
            alt=""
          />
          <Link to="/register">
            <div className="header__center-right-text">
              <h3 className="header__center-right-text-first">
                Стать покупателем!
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderCenter;
