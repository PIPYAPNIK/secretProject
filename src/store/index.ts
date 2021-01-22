import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './pokemonsSlice';
import typesReducer from './typesSlice';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  types: typesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
