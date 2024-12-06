import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  updateProduct,
  deleteProduct,
  addProduct,
} from "../../store/reducers/products/products";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status, error } = useSelector((state) => state.products);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllProducts());
    }
  }, [dispatch, status]);

  // Для начала редактирования продукта
  const handleEditClick = (product) => {
    setEditingProduct({ ...product });
  };

  // Для удаления продукта
  const handleDeleteClick = (id) => {
    dispatch(deleteProduct(id));
  };

  // Сохранение изменений
  const handleSaveClick = () => {
    if (editingProduct) {
      dispatch(updateProduct(editingProduct));
      setEditingProduct(null);
    }
  };

  // Обработка изменений в полях ввода (редактирование)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Обработка изменений для добавления нового продукта
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Добавление нового продукта
  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
    setNewProduct({ title: "", price: "", image: "", description: "" }); // очистка формы после добавления
  };

  return (
    <div>
      <h1>Admin Page</h1>
      {status === "loading" && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <h2>Add New Product</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={newProduct.title}
          onChange={handleAddChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleAddChange}
        />
      </label>
      <label>
        Image:
        <input
          type="text" // Применяем корректный тип для URL
          name="image"
          value={newProduct.image}
          onChange={handleAddChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleAddChange}
        />
      </label>
      <button onClick={handleAddProduct}>Add Product</button>

      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th> {/* Поменял на title */}
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td> {/* Поменял на title */}
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleEditClick(product)}>Edit</button>
                <button onClick={() => handleDeleteClick(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingProduct && (
        <div>
          <h2>Edit Product</h2>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={editingProduct.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={editingProduct.price}
              onChange={handleChange}
            />
          </label>
          <label>
            Image:
            <input
              type="text" // Применяем правильный тип для URL
              name="image"
              value={editingProduct.image}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={editingProduct.description}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={() => setEditingProduct(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Admin;
