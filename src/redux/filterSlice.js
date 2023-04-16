import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    setFilterContacts(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
