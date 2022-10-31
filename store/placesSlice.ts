import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CompanyData } from '../types/companyTypes';

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
    deletePlace: (state, action: PayloadAction<number>) => {
      state.places = state.places.filter((place) => place.id !== action.payload);
    },
    addNewPlace: (state, action: PayloadAction<CompanyData>) => {
      state.places = [...state.places, action.payload];
    },
    updatePlace: (state, action: PayloadAction<CompanyData>) => {
      const id = state.places.findIndex((place) => place.id === action.payload.id);
      state.places.splice(id, 1, action.payload);
    },
  },
});

export const { setPlaces, deletePlace, addNewPlace, updatePlace } = placesSlice.actions;

export default placesSlice.reducer;
