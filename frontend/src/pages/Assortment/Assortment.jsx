import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/reducers/products/products";
import { Link } from "react-router-dom";
import "./Assortment.scss";
import { add, remove } from "../../store/reducers/carts/CartSlice";

const Assortment = ({ cartItem }) => {
  const { data, status, error } = useSelector((state) => state.products);
  const [visibleCount, setVisibleCount] = useState(4);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [cart, setCart] = useState({});
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.search.searchTerm);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          {filteredData.slice(0, visibleCount).map((item) => (
            <div key={item.id} className="assortment__primary-items">
              {cartItems.some((cartItem) => cartItem.id === item.id) ? (
                <button
                  onClick={() => dispatch(remove({ id: item.id }))}
                  className="assortment__primary-button"
                >
                  Убрать с корзины
                </button>
              ) : (
                <button
                  onClick={() => dispatch(add(item))}
                  className="assortment__primary-button"
                >
                  В корзину
                </button>
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
        {visibleCount < filteredData.length && (
          <button onClick={loadMore} className="assortment__load-more">
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Assortment;
