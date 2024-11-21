import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/getProducts",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await axios("http://localhost:8080/products");

      if (res.status !== 200) {
        throw new Error("Ошибка при загрузке продуктов");
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const products = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    filter:{
      filterPrice:'default'
    }
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default products.reducer;
