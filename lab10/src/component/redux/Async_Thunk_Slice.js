import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Delay 1s
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
  }
);

const asyncThunkSlice = createSlice({
  name: 'asyncThunk',
  initialState: {
    users: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default asyncThunkSlice.reducer;
