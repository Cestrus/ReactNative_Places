import type { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorScreenParams, CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabScreenProps, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompanyData } from '../types/companyTypes';

export type StackParamListType = {
  AllPlaces: undefined;
  PlaceDetailsOverview: NavigatorScreenParams<BottomTabParamListType>;
  AddPlace: {
    placeId?: CompanyData['id'];
  };
};

export type BottomTabParamListType = {
  Map: undefined;
  PlaceDetails: {
    placeId: CompanyData['id'];
  };
};

// Screen
export type AllPlacesScreenProps = NativeStackScreenProps<StackParamListType, 'AllPlaces'>;
export type AddPlaceScreenProps = NativeStackScreenProps<StackParamListType, 'AddPlace'>;
export type PlaceDetailsScreenProps = BottomTabScreenProps<BottomTabParamListType>;

// hook useNavigation
export type AddPlaceNavigationProps = NativeStackNavigationProp<StackParamListType, 'AddPlace'>;
export type PlaceDetailsOverviewNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<StackParamListType, 'PlaceDetailsOverview'>,
  BottomTabNavigationProp<BottomTabParamListType>
>;
