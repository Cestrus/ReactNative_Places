import React from 'react';

import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../styles/globalStyles';

const LoaderOverlay = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={GlobalStyles.colors.primary100} />
    </View>
  );
};

export default LoaderOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary400,
  },
});
