import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';
import { WebView } from 'react-native-webview';

import { ILocationPicker } from './LocationPicker.prop';
import Button from '../Button/Button';
import { GlobalStyles } from '../../styles/globalStyles';
import { useDispatch } from 'react-redux';
import { setCoord } from '../../store/placesSlice';
import { useNavigation } from '@react-navigation/native';
import { MapNavigationProps } from '../../types/routeTypes';

export type LocationType = {
  lat: number;
  lng: number;
};

const LocationPicker: React.FC<ILocationPicker> = ({ coord }) => {
  const [location, setLocation] = useState<LocationType | undefined>(coord);
  const [locationPermissions, requestPermissions] = useForegroundPermissions();
  const dispatch = useDispatch();
  const navigation = useNavigation<MapNavigationProps>();

  const verifyPermissions = async (): Promise<boolean> => {
    if (locationPermissions!.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermissions();
      return response.granted;
    }
    if (locationPermissions!.status === PermissionStatus.DENIED) {
      Alert.alert('Permissions is invalid!', 'You need to grant location permissions');
      return false;
    }
    return true;
  };

  const pressHandler = (): void => {
    if (!location) {
      return;
    }
    dispatch(setCoord(location));
    navigation.goBack();
  };

  useEffect(() => {
    if (coord) {
      return;
    }

    if (locationPermissions) {
      const getCurrPposition = async (): Promise<void> => {
        const hasPermissions = await verifyPermissions();
        if (!hasPermissions) {
          return;
        }
        const currLocation = await getCurrentPositionAsync();
        setLocation({ lat: currLocation.coords.latitude, lng: currLocation.coords.longitude });
      };
      getCurrPposition();
    }
  }, [locationPermissions, coord]);

  return (
    <View style={styles.container}>
      <View style={coord ? styles.mapContainerFull : styles.mapContainer}>
        <WebView source={{ uri: `https://www.google.com.ua/maps/@${location?.lat},${location?.lng},17z/?hl=ru` }} />
      </View>
      {!coord && (
        <View style={styles.coordContainer}>
          <View style={styles.coordWrap}>
            <View style={styles.textWrap}>
              <Text style={styles.text}>Lan: {location?.lat}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.text}>Lng: {location?.lng}</Text>
            </View>
          </View>
          <View style={styles.btnWrap}>
            <Button onPress={pressHandler} style={styles.btn}>
              Set Location
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mapContainer: {
    height: '80%',
  },
  mapContainerFull: {
    flex: 1,
  },
  coordContainer: {
    height: '20%',
    marginTop: 20,
  },
  coordWrap: {
    flexDirection: 'row',
  },
  textWrap: {
    flex: 1,
    paddingBottom: 5,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyles.colors.primary100,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  btnWrap: {
    alignItems: 'center',
    marginTop: 20,
  },
  btn: {
    height: 40,
    width: 150,
    backgroundColor: GlobalStyles.colors.primary300,
    borderColor: GlobalStyles.colors.primary100,
    borderWidth: 2,
  },
});

export default LocationPicker;
