import { ViewProps } from 'react-native';

export type ErrorType = {
  message: string;
  isError: boolean;
};

export interface IErrorOverlayProps extends ViewProps {
  error: ErrorType;
  onConfirm: () => void;
}
