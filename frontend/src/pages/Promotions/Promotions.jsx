import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/reducers/products/products";
import { Link } from "react-router-dom";
import "./Promotoins.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

const Promotions = () => {
  const { data, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <div className="Promotions">
      <div className="container">
        <div className="Promotions__primary">
          {data.slice(0, visibleCount).map((item) => {
            return (
              <div key={item.id} className="Promotions__primary-items">
                <MdFavoriteBorder className="Promotions__primary-icons" />
                <MdOutlineFavorite className="Promotions__primary-icons" />
                <Link>
                  <img
                    className="Promotions__primary-image"
                    src={item.image}
                    alt="image" />
                </Link>
                <Link>
                  <h2 className="Promotions__primary-title">{item.title}</h2>
                </Link>
                <Link>
                  <p className="Promotions__primary-desc">{item.description}</p>
                </Link>
                <p className="Promotions__primary-price">{item.price} Euro</p>
              </div>
            );
          })}
        </div>
        {visibleCount < data.length && (
          <button onClick={loadMore} className="Promotions__load-more">
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Promotions;
