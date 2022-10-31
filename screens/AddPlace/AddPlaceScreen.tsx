import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AddForm from '../../components/AddForm/AddForm';
import { GlobalStyles } from '../../styles/globalStyles';
import { IAddPlaceScreenProps } from './AddPlaceScreen.props';

const AddPlaceScreen: React.FC<IAddPlaceScreenProps> = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerTitle: 'Add New Place',
    });
  }, []);

  return (
    <View style={styles.container}>
      <AddForm />
    </View>
  );
};

export default AddPlaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary400,
  },
});
