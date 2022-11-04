import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ErrorOverlay from '../../components/ErrorOverlay/ErrorOverlay';
import { setPlaceDetails } from '../../store/placesSlice';

import { RootState } from '../../store/store';
import { GlobalStyles } from '../../styles/globalStyles';
import { IPlaceDetailsScreenProps } from './PlaceDetailsScreen.prop';

const PlaceDetailsScreen: React.FC<IPlaceDetailsScreenProps> = ({ navigation, route }) => {
  const placeId = route.params?.placeId;

  const dispatch = useDispatch();
  const placeDetails = useSelector((state: RootState) => state.placesSlice.placeDetails);

  useEffect(() => {
    if (placeId) dispatch(setPlaceDetails(placeId));
  }, [placeId]);

  const confirmHandler = (): void => {
    navigation.goBack();
  };

  if (!placeDetails) {
    return (
      <ErrorOverlay
        onConfirm={confirmHandler}
        error={{ message: 'Something went wrong.\n Can`t find this place`s details.', isError: true }}
      />
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: placeDetails.image }} style={{ width: 200, height: 200 }} />
      </View>
      <View style={styles.titleBox}>
        <Text style={[styles.text, styles.name]}>{placeDetails.name}</Text>
        <Text style={styles.text}>{placeDetails.title}</Text>
      </View>
      <View style={styles.addressBox}>
        <Text style={styles.text}>{placeDetails.address.address}</Text>
        <Text style={styles.text}>
          {placeDetails.address.city}, {placeDetails.address.state}
        </Text>
        <Text style={[styles.text]}>{placeDetails.address.postalCode}</Text>
      </View>
      <View style={[styles.departmentBox]}>
        <Text style={[styles.text]}>{placeDetails.department}</Text>
      </View>
    </ScrollView>
  );
};

export default PlaceDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary200,
    paddingHorizontal: 40,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  titleBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: GlobalStyles.colors.primary100,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    marginTop: 20,
    paddingVertical: 20,
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  addressBox: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  departmentBox: {
    borderColor: GlobalStyles.colors.primary100,
    borderTopWidth: 2,
    paddingVertical: 20,
  },
});
