import { createSlice } from '@reduxjs/toolkit';

const pokemonsTypesSlice = createSlice({
  name: 'types',
  initialState: {
    isLoadingTypes: false,
    dataTypes: [],
    errorTypes: null,
  },
  reducers: {
    featchTypes(state) {
      state.isLoadingTypes = true;
      state.dataTypes = [];
      state.errorTypes = null;
    },
    featchTypesResolve(state, action) {
      state.isLoadingTypes = false;
      state.dataTypes = action.payload;
      state.errorTypes = null;
    },
    featchTypesReject(state, action) {
      state.isLoadingTypes = false;
      state.dataTypes = [];
      state.errorTypes = action.payload;
    },
  },
});

export default pokemonsTypesSlice.reducer;
export const { featchTypes, featchTypesResolve, featchTypesReject } = pokemonsTypesSlice.actions;
