import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/reducers/products/products";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import SortingCategory from "../../components/SortingCategory/SortingCategory";
import "./Promotoins.scss";

const Promotions = () => {
  
  const { data, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [visibleCount, setVisibleCount] = useState(20); // Лимит отображаемых продуктов
  const [selectedCategory, setSelectedCategory] = useState("All"); // Выбранная категория
  const [filteredProducts, setFilteredProducts] = useState([]); // Отфильтрованные продукты
  const [sortOrder, setSortOrder] = useState(""); // Порядок сортировки (asc/desc)

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    let updatedProducts =
      selectedCategory === "All"
        ? data 
        : data.filter((item) => item.category === selectedCategory);


    if (sortOrder === "asc") {
      updatedProducts = [...updatedProducts].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      updatedProducts = [...updatedProducts].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategory, sortOrder, data]);

  const categories = ["All", ...new Set(data.map((item) => item.category))];

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <div className="Promotions">
      <div className="container cont">
        
        <SortingCategory
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="Promotions__cont">
          <h1 className="Promotions__title">Promotion</h1>
          <hr />
          <div className="context">
            <div className="Promotions__price-filter">
              <h2 className="Promotions__price-filter_title">Sort by Price</h2>
              <div className="Promotions__price-filter_btns">
                <button
                  onClick={() => setSortOrder("asc")}
                  className={`${
                    sortOrder === "asc"
                      ? "active"
                      : "Promotions__price-filter_btn"
                  }`}
                >
                  Ascending
                </button>
                <button
                  onClick={() => setSortOrder("desc")}
                  className={`${
                    sortOrder === "desc"
                      ? "active"
                      : "Promotions__price-filter_btn"
                  }`}
                >
                  Descending
                </button>
              </div>
            </div>

            <div className="Promotions__founder">
              {filteredProducts.length} Products Found
            </div>
          </div>

          <div className="Promotions__primary">
            {filteredProducts.slice(0, visibleCount).map((item) => (
              <div key={item.id} className="Promotions__primary-items">
                <MdFavoriteBorder className="Promotions__primary-icons" />
                <MdOutlineFavorite className="Promotions__primary-icons" />
                <Link>
                  <img
                    className="Promotions__primary-image"
                    src={item.image}
                    alt="product"
                  />
                </Link>
                <Link>
                  <h2 className="Promotions__primary-title">{item.title}</h2>
                </Link>
                <Link>
                  <p className="Promotions__primary-desc">{item.description}</p>
                </Link>
                <Link>
                  <p className="Promotions__primary-price">{item.price} Euro</p>
                </Link>
              </div>
            ))}
          </div>
          {visibleCount < filteredProducts.length && (
            <button onClick={loadMore} className="Promotions__load-more">
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
