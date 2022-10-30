import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button/Button';
import ErrorOverlay from '../../components/ErrorOverlay/ErrorOverlay';
import { ErrorType } from '../../components/ErrorOverlay/ErrorOverlay.prop';
import LoaderOverlay from '../../components/LoaderOverlay/LoaderOverlay';
import PlacesList from '../../components/PlacesList/PlacesList';

import { setPlaces } from '../../store/placesSlice';
import { GlobalStyles } from '../../styles/globalStyles';
import { fetchCompanies } from '../../utils/http';
import { IAllPlacesScreenProps } from './AllPlacesScreen.props';

const AllPlacesScreen: React.FC<IAllPlacesScreenProps> = ({ navigation }) => {
  const addPlaceHandler = (): void => {
    navigation.navigate('AddPlace');
  };

  const confirmHandler = (): void => {
    setGotError({ message: '', isError: false });
    navigation.navigate('AllPlaces');
  };

  const [isLoaded, setIsLoaded] = useState<boolean>(true);
  const [gotError, setGotError] = useState<ErrorType>({ message: '', isError: false });
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'My Favorite Places',
      headerRight: () => <Button icon='add-to-list' iconColor='white' iconSize={26} onPress={addPlaceHandler} />,
    });

    const fetchData = async (): Promise<void> => {
      try {
        const companies = await fetchCompanies();
        dispatch(setPlaces(companies));
      } catch (err) {
        if (err instanceof Error) {
          setIsLoaded(false);
          setGotError({ message: err.message, isError: true });
        }
      }
      setIsLoaded(false);
    };
    fetchData();
  }, []);

  if (isLoaded) {
    return <LoaderOverlay />;
  }

  if (gotError.isError) {
    return <ErrorOverlay error={gotError} onConfirm={confirmHandler} />;
  }

  return (
    <View style={styles.container}>
      <PlacesList />
    </View>
  );
};

export default AllPlacesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary400,
  },
});
