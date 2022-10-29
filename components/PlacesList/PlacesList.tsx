import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../styles/globalStyles';
import PlacesItem from '../PlacesItem/PlacesItem';
import { IPlaceListProps } from './PlacesList.props';

const PlacesList: React.FC<IPlaceListProps> = ({ places }) => {
  if (!places.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Not favorite plases yet!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      renderItem={({ item }): JSX.Element => <PlacesItem place={item} />}
      keyExtractor={(item): string => item.id.toString()}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: GlobalStyles.colors.primary400,
  },
  emptyText: {
    fontSize: 18,
    color: 'white',
  },
});
