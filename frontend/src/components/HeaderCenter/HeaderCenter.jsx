import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./HeaderCenter.scss";
import { Link } from "react-router-dom";
import { logOut } from "../../store/reducers/user/user";
import { useDispatch, useSelector } from "react-redux";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { open } from "../../store/reducers/carts/CheckOutSlice";
import { setSearchTerm } from "../../store/reducers/search/search";

const HeaderCenter = () => {
  const dispatch = useDispatch();

  const { user, status, error } = useSelector((s) => s.user);
  const { amount } = useSelector((state) => state.cart);

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

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
              onChange={handleInputChange}
              className="header__center-center-input"
              type="text"
              placeholder="Find your product..."
            />
            <button className="header__center-center-button">Search</button>
          </div>
          <div
            className="header__center-right"
            style={{ position: "relative" }}
          >
            {" "}
            <MdOutlineShoppingBag
              onClick={() => dispatch(open())}
              style={{ fontSize: "45px", color: "#fff", cursor: "pointer" }}
            />
            <button
              className="header__center-right-text"
              onClick={() => dispatch(open())}
            >
              <span className="header__center-right-amount">{amount}</span>
              <h3>Корзина</h3>
            </button>
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
