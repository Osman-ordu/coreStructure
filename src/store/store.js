import { configureStore } from '@reduxjs/toolkit';
import { exportDealsReducer, getDealsReducer } from './deals/index';

export const store = configureStore({
  reducer: {
    dealsValue: getDealsReducer,
    dealsExportLastMonthValue: exportDealsReducer,
  },
});

export const getState = store.getState;
export const dispatch = store.dispatch;