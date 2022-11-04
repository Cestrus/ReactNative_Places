import type { ViewProps } from 'react-native';
import { CompanyData } from '../../types/companyTypes';

export interface IPlacesItemProps extends ViewProps {
  place: CompanyData;
  onItemPress: (id: number) => void;
  onDeletePress: (id: number) => void;
}
