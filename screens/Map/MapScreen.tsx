import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import LocationPicker from '../../components/LocationPicker/LocationPicker';
import { RootState } from '../../store/store';
import { GlobalStyles } from '../../styles/globalStyles';
import { IMapScreenProps } from './MapScreen.props';

const MapScreen: React.FC<IMapScreenProps> = () => {
  const placeDetails = useSelector((store: RootState) => store.placesSlice.placeDetails);

  return (
    <View style={styles.container}>
      <LocationPicker coord={placeDetails?.address.coordinates} />
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
