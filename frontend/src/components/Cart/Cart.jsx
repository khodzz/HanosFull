import React from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/reducers/carts/CheckOutSlice";
import CheckOutItems from "./CheckOutItems";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  return (
    <>
      <div className="cart__bg"></div>
      <div className="cart">
        <div className="container">
          <div className="cart__container">
            <button
              className="cart__container-close"
              onClick={() => dispatch(open())}
            >
              {"<"} Закрыть корзину
            </button>
            <div className="cart__header">
              <h2 className="cart__header-title">Корзина</h2>
              <button className="cart__header-amount">
                Количество Товаров({amount})
              </button>
            </div>
            <div className="cart__container-products">
              {cartItems.length === 0 ? (
                <div className="cart__container-product-empty">
                  <p>Корзина пуста</p>
                </div>
              ) : (
                <>
                  {cartItems.map((cartItem) => {
                    return (
                      <CheckOutItems key={cartItem.id} cartItem={cartItem} />
                    );
                  })}
                </>
              )}
            </div>
            <div className="cart__container-prices">
              <p className="cart__container-prices-text">Итого:</p>
              <p className="cart__container-prices-text">{total.toFixed(2)}€</p>
            </div>

            <button className="cart__container-buy">Купить</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
