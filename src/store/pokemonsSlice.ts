import { createSlice } from '@reduxjs/toolkit';

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    isLoadingPokemons: false,
    dataPokemons: [],
    errorPokemons: null,
  },
  reducers: {
    featchPokemons(state) {
      state.isLoadingPokemons = true;
      state.dataPokemons = [];
      state.errorPokemons = null;
    },
    featchPokemonsResolve(state, action) {
      state.isLoadingPokemons = false;
      state.dataPokemons = action.payload;
      state.errorPokemons = null;
    },
    featchPokemonsReject(state, action) {
      state.isLoadingPokemons = false;
      state.dataPokemons = [];
      state.errorPokemons = action.payload;
    },
  },
});

export default pokemonsSlice.reducer;
export const { featchPokemons, featchPokemonsResolve, featchPokemonsReject } = pokemonsSlice.actions;
