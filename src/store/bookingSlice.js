// src/store/bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookingDetails: null,
  },
  reducers: {
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    },
  },
});

export const { setBookingDetails } = bookingSlice.actions;
export default bookingSlice.reducer;
