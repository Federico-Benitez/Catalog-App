import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: ['hola'],
};

const events = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.favorites = action.payload;
    },
    removeEvent: (state, action) => {
      state.favorites = [];
    },
  },
});

export const {addEvent} = events.actions;
export default events.reducer;
