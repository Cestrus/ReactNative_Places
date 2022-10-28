import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './store/store';
import PlacesList from './components/PlacesList/PlacesList';
import { GlobalStyles } from './styles/globalStyles';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar style='light' />
      <View style={styles.container}>
        <PlacesList />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary400,
    padding: 5,
  },
});
