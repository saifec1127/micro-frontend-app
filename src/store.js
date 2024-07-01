import { configureStore } from '@reduxjs/toolkit';
import dailyUpdatesReducer from './features/dailyUpdates/dailyUpdatesSlice';

const store = configureStore({
  reducer: {
    dailyUpdates: dailyUpdatesReducer,
  },
});

export default store;
