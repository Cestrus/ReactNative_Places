import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { ImagePickerResult, launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';

import Button from '../Button/Button';
import { IImagePicker } from './imagePicker.prop';
import { GlobalStyles } from '../../styles/globalStyles';

const ImagePicker: React.FC<IImagePicker> = ({ setImageUri }) => {
  const [cameraPermissions, permissionsResponseFunc] = useCameraPermissions();

  const verifyPermissions = async (): Promise<boolean> => {
    if (cameraPermissions!.status === PermissionStatus.UNDETERMINED) {
      const response = await permissionsResponseFunc();
      return response.granted;
    }
    if (cameraPermissions!.status === PermissionStatus.DENIED) {
      Alert.alert('Permissions is invalid!', 'You need to grant camera permissions');
      return false;
    }
    return true;
  };

  const pressHandler = async (): Promise<ImagePickerResult | undefined> => {
    const hasPermissions = await verifyPermissions();

    if (!hasPermissions) {
      return;
    }

    const image = await launchCameraAsync({
      aspect: [16, 9],
      allowsEditing: true,
      quality: 0.5,
    });

    if (!image.cancelled) {
      setImageUri('image', image.uri);
    }
  };

  return (
    <View style={styles.container}>
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
