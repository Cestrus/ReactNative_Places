import { ViewProps } from 'react-native';

export interface ILocationPicker extends ViewProps {
  coord?: {
    lng: number;
    lat: number;
  };
}
