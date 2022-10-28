import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { GlobalStyles } from '../../styles/globalStyles';
import { IPlacesItemProps } from './PlacesItem.props';

const PlacesItem: React.FC<IPlacesItemProps> = ({ place }) => {
  const pressHandler = (id: number): void => {
    console.log('click', id, place.image);
  };

  return (
    <Pressable onPress={(): void => pressHandler(place.id)}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: place.image }} style={styles.image} />
        </View>
        <View style={styles.companyDataContainer}>
          <Text style={[styles.text, styles.name]}>{place.name}</Text>
          <View style={styles.adressContainer}>
            <Text style={styles.text}>{place.address.city}</Text>
            <Text style={styles.text}>{place.address.address}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default PlacesItem;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'row',
    height: 100,
    backgroundColor: GlobalStyles.colors.primary200,
    marginVertical: 3,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary100,
  },

  image: {
    height: 90,
    width: 90,
  },
  companyDataContainer: {
    flex: 3,
  },
  adressContainer: {
    marginHorizontal: 15,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 5,
  },
});
