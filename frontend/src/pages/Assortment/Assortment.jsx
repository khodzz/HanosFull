import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/reducers/products/products";
import { Link } from "react-router-dom";
import "./Assortment.scss";

const Assortment = () => {
  const { data, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="Assortment">
      {data.map((item) => (
        <a href="#">
          <div className="Assortment__cart" key={item.id}>
          <img
            className="Assortment__cart_image"
            src={item.image}
            alt="ПОСТЕР ВРЕМЕННО ОТСУТСВУЕТ"
          />
          <h2 className="Assortment__cart_title">{item.title}</h2>
          <a href="" className="Assortment__cart_cotegory">{item.category}</a>
          <p className="Assortment__cart_subtitle">{item.description}</p>

          <p className="Assortment__cart_price">{item.price} $</p>
        </div>
        </a>
        
      ))}
    </div>
  );
};

export default Assortment;
