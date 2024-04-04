import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PostsTotalState {
  total: number;
  current: number;
}

const initialState: PostsTotalState = {
  total: 0,
  current: 10,
};

export const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    increment: (state) => {
      if (state.total > state.current) {
        state.current += 10;
      }
    },
  },
});

export default totalSlice.reducer;
