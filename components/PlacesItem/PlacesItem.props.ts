import type { ViewProps } from 'react-native';
import { CompanyData } from '../../models/company';

export interface IPlacesItemProps extends ViewProps {
  place: CompanyData;
}
