import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { store } from './store/store';
import { GlobalStyles } from './styles/globalStyles';
import AllPlacesScreen from './screens/AllPlaces/AllPlacesScreen';
import PlaceDetailsScreen from './screens/PlaceDetails/PlaceDetailsScreen';
import AddPlaceScreen from './screens/AddPlace/AddPlaceScreen';
import { BottomTabParamListType, StackParamListType } from './types/routeTypes';
import MapScreen from './screens/Map/MapScreen';
import { Entypo } from '@expo/vector-icons';

const Stack = createNativeStackNavigator<StackParamListType>();
const BottomTab = createBottomTabNavigator<BottomTabParamListType>();

const PlaceDetailsOverview = (): JSX.Element => {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }): BottomTabNavigationOptions => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary100,
        },
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary100,
        },
        tabBarInactiveTintColor: GlobalStyles.colors.primary50,
        tabBarActiveTintColor: 'white',
        headerLeft: () => (
          <Entypo
            name='chevron-left'
            size={24}
            color='white'
            onPress={(): void => {
              console.log('click');
            }}
          />
        ),
      })}
    >
      <BottomTab.Screen
        name='PlaceDetails'
        component={PlaceDetailsScreen}
        options={{
          title: 'Place Details',
          tabBarLabel: 'DETAILS',
          tabBarIcon: () => <Entypo name='text-document' />,
        }}
      />
      <BottomTab.Screen
        name='Map'
        component={MapScreen}
        options={{
          title: 'Map Location',
          tabBarLabel: 'LOCATION',
          tabBarIcon: () => <Entypo name='location-pin' />,
        }}
      />
    </BottomTab.Navigator>
  );
};

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
            <Stack.Screen
              name='PlaceDetailsOverview'
              component={PlaceDetailsOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='AddPlace' component={AddPlaceScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
