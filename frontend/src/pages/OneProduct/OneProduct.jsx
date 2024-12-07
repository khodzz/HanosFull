import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/reducers/products/products";
import { Link } from "react-router-dom";
import "./OneProduct.scss";
import { add, remove } from "../../store/reducers/carts/CartSlice";

const OneProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    selectedProduct: product,
    status: productStatus,
    error,
  } = useSelector((state) => state.products);

  const { user, status: userStatus, er } = useSelector((s) => s.user);
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  if (productStatus === "loading") return <div>Загрузка...</div>;
  if (productStatus === "failed") return <div>Ошибка: {error}</div>;
  if (!product) return <div>Продукт не найден</div>;
  return (
    <div className="product">
      <div className="container">
        <div className="product__row">
          <div style={{ display: "flex" }}>
            <img className="product__row-image" src={product.image} alt="" />
            <div>
              <p className="product__row-category">{product.category}</p>
              <h1 className="product__row-title">{product.title}</h1>
              <h2 className="product__row-subtitle">{product.description}</h2>
              <div className="product__row-rows">
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="product__row-container">Артикул</p>
                    <p className="product__row-container-text">
                      {product.article}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="product__row-container">В наличии:</p>
                    <p className="product__row-container-text">
                      {product.stock}штук
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="product__row-container">Вес товара:</p>
                    <p className="product__row-container-text">
                      {product.gram}грамм
                    </p>
                  </div>
                </div>
                <div className="product__row-rows-left">
                  <div >
                    <p className="product__row-rows-text">
                      Акция действительна до 31-12-2024
                    </p>
                    <div style={{ display: "flex", gap: "20px" }}>
                      <p className="product__row-rows-price">
                        {product.price}€
                      </p>
                      <p className="product__row-rows-promotion">
                        {product.promotionPrice} €
                      </p>
                    </div>
                    <p className="product__row-rows-per">за килограмм</p>
                  </div>
                  <div>
                    {userStatus === "success" ? (
                      <div>
                        <button
                          onClick={() => dispatch(add(product))}
                          className="product__row-rows-button"
                        >
                          Купить
                        </button>
                      </div>
                    ) : (
                      <div className="product__row-user">
                        <p className="product__row-user-text">
                          Для того чтобы приобрести этот товар нужно
                          зарегистрироваться либо войти в аккаунт
                        </p>
                        <Link to="/login">
                          <button
                            onClick={() => dispatch(add(item))}
                            className="product__row-user-login"
                          >
                            Войти
                          </button>
                        </Link>
                        <Link to="/register">
                          <button className="product__row-user-register">
                            Зарегистрироваться
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
