import { createSlice } from '@reduxjs/toolkit';

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  reducers: {
    featchPokemons(state) {
      state.isLoading = true;
      state.data = null;
      state.error = null;
    },
    featchPokemonsResolve(state, action) {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    },
    featchPokemonsReject(state, action) {
      state.isLoading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export default pokemonsSlice.reducer;
export const { featchPokemons, featchPokemonsResolve, featchPokemonsReject } = pokemonsSlice.actions;
