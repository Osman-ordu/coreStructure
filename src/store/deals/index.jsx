import { createAsyncThunk } from '@reduxjs/toolkit';
import { CallApi } from '../../utils/services';
import { createSliceModule } from '../createSliceModule';

export const getDeals = createAsyncThunk('deals', async (data) => {
  const config = {
    url: `/api/deal`,
    method: 'POST',
    data: data,
  };
  return await CallApi(config);
});

export const exportDeals = createAsyncThunk('exportDeals', async (data) => {
  const config = {
    url: `/api/deal-export`,
    method: 'POST',
    data: data,
    responseType: 'blob',
  };
  return await CallApi(config);
});

const getDealsSlice = createSliceModule('deals', getDeals);
const getDealsReducer = getDealsSlice.reducer;
const exportDealsSlice = createSliceModule('exportDeals', exportDeals);
const exportDealsReducer = exportDealsSlice.reducer;

export { getDealsReducer, exportDealsReducer };
