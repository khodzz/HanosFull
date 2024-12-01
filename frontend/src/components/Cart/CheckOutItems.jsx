import React from "react";
import "./CheckOutItems.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  increase,
  decrease,
  remove,
  total,
} from "../../store/reducers/carts/CartSlice";
import { useDispatch } from "react-redux";

const CheckOutItems = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { id, title, description, price, category, image, amount } = cartItem;
  return (
    <div className="products">
      <div className="container">
        <div className="products__card">
          <img className="products__img" src={image} alt="" />
          <div style={{ width: "100%" }}>
            <div className="products__info">
              <p className="products__info-price">
                {(price * amount).toFixed(2)}
              </p>
              <RiDeleteBin5Line
                style={{ fontSize: "25px", cursor: "pointer" }}
              />
            </div>
            <div>
              <p className="products__info-title">{title}</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
                padding: "10px 0",
              }}
            >
              <button
                className="products__decrease"
                onClick={() => dispatch(decrease(cartItem))}
              >
                -
              </button>
              <p className="products__amount">{amount}</p>

              <button
                className="products__increase"
                onClick={() => dispatch(increase(cartItem))}
              >
                +
              </button>
            </div>
            <button onClick={() => dispatch(remove(cartItem))}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItems;
