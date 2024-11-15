import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "post/registerUser",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:8080/register", arg);

      if (res.status !== 201) {
        throw new Error("Ошибка при регистрации");
      }

      return res.data.user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const user = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      });
  },
});

export default user.reducer;
