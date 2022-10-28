import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CompanyData } from '../models/company';

export interface IPlasesState {
  places: CompanyData[];
}

const initialState: IPlasesState = {
  places: [],
};

export const placesSlice = createSlice({
  name: 'placesSlice',
  initialState,
  reducers: {
    setPlaces: (state, action: PayloadAction<CompanyData[]>) => {
      state.places = [...action.payload];
    },
  },
});

export const { setPlaces } = placesSlice.actions;

export default placesSlice.reducer;
