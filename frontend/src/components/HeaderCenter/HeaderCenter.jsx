import React from "react";
import { assets } from "../../assets/assets";
import "./HeaderCenter.scss";
import { Link } from "react-router-dom";
import { logOut } from "../../store/reducers/user/user";
import { useDispatch, useSelector } from "react-redux";
import { IoExitOutline } from "react-icons/io5";

const HeaderCenter = () => {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((s) => s.user);

  return (
    <>
      <div className="header__center">
        <div className="container">
          <div className="header__center-left">
            <Link to="">
              <img
                className="header__center-left-logo"
                src={assets.logo}
                alt=""
              />
            </Link>
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
            {status === "success" ? (
              <IoExitOutline style={{ fontSize: 40, color: "#fff" }} />
            ) : (
              <img
                className="header__center-right-place"
                src={assets.loginPerson}
                alt=""
              />
            )}
            {status === "success" ? (
              <button
                className="header__center-right-btn"
                onClick={() => dispatch(logOut())}
              >
                Выйти с <br /> аккаунта
              </button>
            ) : (
              <Link to="/register">
                <div className="header__center-right-text">
                  <h3 className="header__center-right-text-first">
                    Стать покупателем!
                  </h3>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCenter;

// user.status === "succeeded" &&
