import React from "react";
import "./HeaderTop.scss";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HeadertTop = () => {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((s) => s.user);
  return (
    <div className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__top-left">
            <p className="header__top-about">About HANOS</p>
            <p className="header__top-partners">Наши партнеры</p>
          </div>
          <div className="header__top-right">
            <div>
              <img src={assets.CustomerService} alt="" />
              <p className="header__top-customer">Сервис для покупателей</p>
            </div>
            {status === "success" ? (
              <Link className="header__top-login-link" to="/personalPage">
                <img src={assets.Login} alt="" />
                <button className="header__top-login-btn">
                  Перейти в аккаунт
                </button>
              </Link>
            ) : (
              <Link className="header__top-login-link" to="/login">
                <div>
                  <img src={assets.Login} alt="" />
                  <p className="header__top-login">Зайти в аккаунт</p>
                </div>
              </Link>
            )}

            <div>
              <img src={assets.Language} alt="" />
              <p className="header__top-en">ру</p>
              <img
                className="header__top-arrow"
                src={assets.ArrowSelectLang}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadertTop;
