import React from "react";
import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__container">
          <div className="cart__header">
            <h2 className="cart__header-title">Корзина</h2>
            <button className="cart__header-favorites">Избранные</button>
          </div>
          <div className="cart__container-products"></div>
          <div className="cart__container-prices">
            <p className="cart__container-prices-text">Итого:</p>
            <p className="cart__container-prices-price"></p>
          </div>
          <div className="cart__container-subtotal">
            <p className="cart__container-subtotal-price"></p>
            <button className="cart__container-subtotal-btn">Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
