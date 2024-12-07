import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Получение всех продуктов
export const getAllProducts = createAsyncThunk(
  "products/getProducts",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await axios("http://localhost:8080/products");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Получение одного продукта
export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:8080/products/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Обновление продукта
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/products/${product.id}`,
        product
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Удаление продукта
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8080/products/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Добавление нового продукта
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/products",
        product
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const products = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    selectedProduct: null,
    error: null,
    filter: {
      filterPrice: "default",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "success";
        const updatedProduct = action.payload;
        const index = state.data.findIndex(
          (product) => product.id === updatedProduct.id
        );
        if (index !== -1) {
          state.data[index] = updatedProduct;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.data = state.data.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.data.push(action.payload);
      });
  },
});

export default products.reducer;
