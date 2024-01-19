import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface Event {
  id: number;
  name: string;
  picture: string;
  date: string;
}
interface SavedEvents {
  ids: number[];
  saved: Event[];
}

const initialState: SavedEvents = {
  ids: [],
  saved: [],
};

const savedEvents = createSlice({
  name: 'savedEvents',
  initialState,
  reducers: {
    toggleEvent: (state, action: PayloadAction<Event>) => {
      const eventIndex = state.ids.findIndex(id => id === action.payload.id);

      if (eventIndex !== -1) {
        state.ids.splice(eventIndex, 1);
        state.saved.splice(eventIndex, 1);
        return state;
      }
      state.ids = [...state.ids, action.payload.id];
      state.saved = [...state.saved, action.payload];
    },
  },
});

export const {toggleEvent} = savedEvents.actions;
export default savedEvents.reducer;
