import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/reducers/products/products";
import { Link } from "react-router-dom";
import "./Assortment.scss";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const Assortment = () => {
  const { data, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(4);

  const [cart, setCart] = useState({});

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const toggleCart = (id) => {
    setCart((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <div className="assortment">
      <div className="container">
        <div className="assortment__primary">
          {data.slice(0, visibleCount).map((item) => (
            <div key={item.id} className="assortment__primary-items">
              {cart[item.id] ? (
                <MdOutlineRemoveShoppingCart
                  onClick={() => toggleCart(item.id)}
                  className="assortment__primary-icons"
                />
              ) : (
                <MdOutlineShoppingCart
                  onClick={() => toggleCart(item.id)}
                  className="assortment__primary-icons"
                />
              )}
              <Link>
                <img
                  className="assortment__primary-image"
                  src={item.image}
                  alt="image"
                />
              </Link>
              <Link>
                <h2 className="assortment__primary-title">{item.title}</h2>
              </Link>
              <br />
              <Link>
                <p className="assortment__primary-desc">{item.description}</p>
              </Link>
              <br />
              <p className="assortment__primary-price">{item.price} Euro</p>
            </div>
          ))}
        </div>
        {visibleCount < data.length && (
          <button onClick={loadMore} className="assortment__load-more">
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Assortment;
