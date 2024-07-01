import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dailyUpdatesService from '../../services/dailyUpdatesService';

export const getDailyUpdates = createAsyncThunk(
  'dailyUpdates/getDailyUpdates',
  async () => {
    const data = await dailyUpdatesService.getDailyUpdates();
    return data;
  }
);

export const addDailyUpdate = createAsyncThunk(
  'dailyUpdates/addDailyUpdate',
  async (dailyUpdate) => {
    const data = await dailyUpdatesService.createDailyUpdate(dailyUpdate);
    return data;
  }
);

const dailyUpdatesSlice = createSlice({
  name: 'dailyUpdates',
  initialState: {
    dailyUpdates: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDailyUpdates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDailyUpdates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dailyUpdates = action.payload;
      })
      .addCase(getDailyUpdates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addDailyUpdate.fulfilled, (state, action) => {
        state.dailyUpdates.push(action.payload);
      });
  },
});

export default dailyUpdatesSlice.reducer;
