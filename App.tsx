import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { store } from './store/store';
import { GlobalStyles } from './styles/globalStyles';
import AllPlacesScreen from './screens/AllPlaces/AllPlacesScreen';
import PlaceDetailsScreen from './screens/PlaceDetails/PlaceDetailsScreen';
import AddPlaceScreen from './screens/AddPlace/AddPlaceScreen';
import { StackParamListType } from './types/routeTypes';

const Stack = createNativeStackNavigator<StackParamListType>();

export const App: React.FC = () => {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary100,
              },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen name='AllPlaces' component={AllPlacesScreen} />
            <Stack.Screen name='PlaceDetails' component={PlaceDetailsScreen} />
            <Stack.Screen name='AddPlace' component={AddPlaceScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
