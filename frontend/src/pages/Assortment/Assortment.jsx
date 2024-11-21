import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/reducers/products/products";
import { Link } from "react-router-dom";
import "./Assortment.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

const Assortment = () => {
  const { data, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="assortment">
      <div className="container">
        <div className="assortment__primary">
          {data.slice(0, visibleCount).map((item) => (
            <div key={item.id} className="assortment__primary-items">
              <MdFavoriteBorder className="assortment__primary-icons" />
              <MdOutlineFavorite className="assortment__primary-icons" />
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
              <Link>
                <p className="assortment__primary-desc">{item.description}</p>
              </Link>
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
