import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, StyleProp, ViewStyle } from 'react-native';

import { GlobalStyles } from '../../styles/globalStyles';
import Button from '../Button/Button';
import { IPlacesItemProps } from './PlacesItem.props';

const PlacesItem: React.FC<IPlacesItemProps> = ({ place, onDeletePress, onItemPress }) => {
  const pressHandler = (id: number): void => {
    onItemPress(id);
  };
  const pressBtnHandler = (id: number): void => {
    onDeletePress(id);
  };

  const formatString = (str: string): string => {
    if (str.length <= 25) {
      return str;
    }
    const strArr = str.split('');
    strArr.length = 25;
    return strArr.concat(['...']).join('');
  };

  return (
    <Pressable
      onPress={(): void => pressHandler(place.id)}
      style={({ pressed }): StyleProp<ViewStyle> => (pressed ? styles.pressed : null)}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: place.image }} style={styles.image} />
        </View>
        <View style={styles.companyDataContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.textContainer}>
              <Text style={[styles.text, styles.name]}>{formatString(place.name)}</Text>
            </View>
            <Button
              onPress={(): void => pressBtnHandler(place.id)}
              icon='cross'
              iconSize={20}
              iconColor={GlobalStyles.colors.primary100}
              style={styles.btnDelete}
            />
          </View>
          <View style={styles.adressContainer}>
            <Text style={styles.text}>{place.address.city}</Text>
            <Text style={styles.text}>{formatString(place.address.address)}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 90,
    width: 90,
  },
  companyDataContainer: {
    flex: 3,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  adressContainer: {
    marginHorizontal: 15,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btnDelete: {
    width: 30,
    marginRight: 10,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});
