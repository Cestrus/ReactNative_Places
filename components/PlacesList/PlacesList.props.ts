import type { ViewProps } from 'react-native';
import { CompanyData } from '../../models/company';

export interface IPlaceListProps extends ViewProps {
  places: CompanyData[];
}
