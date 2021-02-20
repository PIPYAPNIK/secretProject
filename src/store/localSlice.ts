import { createSlice } from '@reduxjs/toolkit';

const localSlice = createSlice({
  name: 'local',
  initialState: {
    activeType: '',
  },
  reducers: {
    changeActiveType(state, action) {
      state.activeType = action.payload;
    },
  },
});

export default localSlice.reducer;
export const { changeActiveType } = localSlice.actions;
