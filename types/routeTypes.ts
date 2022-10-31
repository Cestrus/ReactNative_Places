import type { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorScreenParams, CompositeNavigationProp } from '@react-navigation/native';
import { CompanyData } from '../types/companyTypes';

export type StackParamListType = {
  AllPlaces: undefined;
  PlaceDetails: {
    placeId: CompanyData['id'];
  };
  AddPlace: undefined;
};

export type AllPlacesNavigationProps = NativeStackScreenProps<StackParamListType, 'AllPlaces'>;
export type AddPlaceNavigationProps = NativeStackScreenProps<StackParamListType, 'AddPlace'>;
