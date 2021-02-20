import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './pokemonsSlice';
import typesReducer from './typesSlice';
import localSlice from './localSlice';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  types: typesReducer,
  local: localSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
