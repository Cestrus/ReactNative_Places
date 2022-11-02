import React from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../../../styles/globalStyles';
import ImagePicker from '../../imagePicker/imagePicker';
import Input from '../Input/Input';
import { IImageSourseProps } from './ImageSourse.prop';

const ImageSourse: React.FC<IImageSourseProps> = ({ image, changeTextHandler, switchState }) => {
  const { isEnable, setIsEnable } = switchState;

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Switch
          onValueChange={setIsEnable}
          value={isEnable}
          trackColor={{ false: GlobalStyles.colors.primary100, true: GlobalStyles.colors.primary100 }}
          thumbColor={isEnable ? 'white' : GlobalStyles.colors.primary50}
        />
        <Text style={styles.text}>Input image URL or take image from store</Text>
      </View>
      <View style={!isEnable && styles.wrapper}>
        {isEnable ? (
          <Input
            label='Image URL'
            onChangeText={(text): void => changeTextHandler('image', text)}
            value={image.value}
            isValid={image.isValid}
            style={styles.input}
          />
        ) : (
          <ImagePicker />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    paddingLeft: 10,
  },
  input: {
    marginHorizontal: 0,
  },
  wrapper: {
    alignItems: 'center',
  },
});

export default ImageSourse;
