import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CompanyData } from '../../types/companyTypes';
import { deletePlace } from '../../store/placesSlice';
import { RootState } from '../../store/store';
import { GlobalStyles } from '../../styles/globalStyles';
import PlacesItem from '../PlacesItem/PlacesItem';
import { IPlaceListProps } from './PlacesList.props';
import { PlaceDetailsOverviewNavigationProps } from '../../types/routeTypes';

const PlacesList: React.FC<IPlaceListProps> = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<PlaceDetailsOverviewNavigationProps>();
  const places = useSelector((state: RootState) => state.placesSlice.places);

  const deletePressHandler = (id: CompanyData['id']): void => {
    dispatch(deletePlace(id));
  };

  const itemPressHandler = (id: CompanyData['id']): void => {
    navigation.navigate('PlaceDetailsOverview', { screen: 'PlaceDetails', params: { placeId: id } });
  };

  if (!places || !places.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Not favorite plases yet!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      renderItem={({ item }): JSX.Element => (
        <PlacesItem place={item} onDeletePress={deletePressHandler} onItemPress={itemPressHandler} />
      )}
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
