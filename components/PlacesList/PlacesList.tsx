import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setPlaces } from '../../store/placesSlice';
import { RootState } from '../../store/store';
import { GlobalStyles } from '../../styles/globalStyles';
import { fetchCompanies } from '../../utils/http';
import PlacesItem from '../PlacesItem/PlacesItem';
import { IPlaceListProps } from './PlacesList.props';
import LoaderOverlay from '../LoaderOverlay/LoaderOverlay';

const PlacesList: React.FC<IPlaceListProps> = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(true);
  const places = useSelector((state: RootState) => state.placesSlice.places);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const companies = await fetchCompanies();
        dispatch(setPlaces(companies));
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        }
      }
      setIsLoaded(false);
    };

    fetchData();
  }, []);

  if (isLoaded) {
    return <LoaderOverlay />;
  }

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
