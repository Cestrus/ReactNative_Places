import { ViewProps } from 'react-native';
import { FormFieldValueType } from '../AddForm';

export interface IImageSourseProps extends ViewProps {
  image: FormFieldValueType;
  changeTextHandler: (type: string, text: string) => void;
  switchState: {
    isEnable: boolean;
    setIsEnable: React.Dispatch<React.SetStateAction<boolean>>;
  };
}
