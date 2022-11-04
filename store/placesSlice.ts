import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CompanyData } from '../types/companyTypes';
import { CompanyCoordinates } from '../utils/http';

export interface IPlasesState {
  places: CompanyData[];
  placeDetails: CompanyData | undefined;
  coordNewPlace: CompanyCoordinates | undefined;
}

const initialState: IPlasesState = {
  places: [],
  placeDetails: undefined,
  coordNewPlace: undefined,
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
    setPlaceDetails: (state, action: PayloadAction<number>) => {
      state.placeDetails = state.places.find((place) => place.id === action.payload);
    },
    clearPlaceDetails: (state) => {
      state.placeDetails = undefined;
    },
    setCoord: (state, action: PayloadAction<CompanyCoordinates>) => {
      state.coordNewPlace = { ...action.payload };
    },
  },
});

export const { setPlaces, deletePlace, addNewPlace, setPlaceDetails, clearPlaceDetails, setCoord } =
  placesSlice.actions;

export default placesSlice.reducer;
