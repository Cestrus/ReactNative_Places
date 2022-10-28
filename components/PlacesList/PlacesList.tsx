import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setPlaces } from '../../store/placesSlice';
import { RootState } from '../../store/store';
import { fetchCompanies } from '../../utils/http';

import PlacesItem from '../PlacesItem/PlacesItem';
import { IPlaceListProps } from './PlacesList.props';

const PlacesList: React.FC<IPlaceListProps> = () => {
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
    };

    fetchData();
  }, []);

  return (
    <FlatList
      data={places}
      renderItem={({ item }): JSX.Element => <PlacesItem place={item} />}
      keyExtractor={(item): string => item.id.toString()}
    />
  );
};

export default PlacesList;
