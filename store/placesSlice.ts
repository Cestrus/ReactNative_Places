import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CompanyData } from '../models/company';

export interface IPlasesState {
  places: CompanyData[];
  placeDetails: CompanyData | null;
}

const initialState: IPlasesState = {
  places: [],
  placeDetails: null,
};

export const placesSlice = createSlice({
  name: 'placesSlice',
  initialState,
  reducers: {
    setPlaces: (state, action: PayloadAction<CompanyData[]>) => {
      state.places = [...action.payload];
    },
    deletePlace: (state, action: PayloadAction<number>) => {
      state.places = state.places.filter((place) => place.id !== action.payload);
    },
    getPlace: (state, action: PayloadAction<number>) => {
      console.log('here');

      // if (state.places) {
      //   return state.places.filter((place) => place.id === action.payload);
      // }
    },
  },
});

export const { setPlaces, deletePlace, getPlace } = placesSlice.actions;

export default placesSlice.reducer;
