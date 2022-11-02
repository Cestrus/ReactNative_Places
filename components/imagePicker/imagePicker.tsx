import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ImagePickerResult, launchCameraAsync } from 'expo-image-picker';

import Button from '../Button/Button';
import { IImagePicker } from './imagePicker.prop';
import { GlobalStyles } from '../../styles/globalStyles';

const ImagePicker: React.FC<IImagePicker> = () => {
  const pressHandler = async (): Promise<ImagePickerResult> => {
    const image = await launchCameraAsync({
      aspect: [16, 9],
      allowsEditing: true,
      quality: 0.5,
    });
    console.log(image);
  };

  return (
    <View style={styles.container}>
      <View></View>

      <Button onPress={pressHandler} style={styles.btn}>
        Take Image
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  btnContainer: {},
  btn: {
    borderColor: GlobalStyles.colors.primary100,
    borderWidth: 2,
    borderRadius: 10,
    width: 120,
    height: 40,
  },
});

export default ImagePicker;
