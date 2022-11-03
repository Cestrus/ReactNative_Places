import { ViewProps } from 'react-native';

export interface IImagePicker extends ViewProps {
  setImageUri: (type: string, text: string) => void;
}
