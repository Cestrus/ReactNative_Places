import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './store/store';
import PlacesList from './components/PlacesList/PlacesList';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <PlacesList />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
