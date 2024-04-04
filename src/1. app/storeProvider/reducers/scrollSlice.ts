import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ScrollState {
    value: number;
}

const initialState: ScrollState = {
    value: 0,
};

export const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        addValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export default scrollSlice.reducer;