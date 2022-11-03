import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';
import { LatLng, LeafletView } from 'react-native-leaflet-view';

const LocationPicker: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number }>({});
  const [locationPermissions, requestPermissions] = useForegroundPermissions();

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

  useEffect(() => {
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
  }, [locationPermissions]);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}></View>
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
});

export default LocationPicker;
