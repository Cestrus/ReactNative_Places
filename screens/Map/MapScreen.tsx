import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LocationPicker from '../../components/LocationPicker/LocationPicker';
import { GlobalStyles } from '../../styles/globalStyles';
import { IMapScreenProps } from './MapScreen.props';

const MapScreen: React.FC<IMapScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Map Screen</Text>
      <LocationPicker />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary300,
  },
});
