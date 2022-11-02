import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Button from '../Button/Button';
import { GlobalStyles } from '../../styles/globalStyles';
import { IErrorOverlayProps } from './ErrorOverlay.prop';

const ErrorOverlay: React.FC<IErrorOverlayProps> = ({ error, onConfirm }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error.message}</Text>
      <Button onPress={onConfirm} style={styles.btnOk}>
        OK
      </Button>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary400,
  },
  text: {
    fontSize: 16,
    color: GlobalStyles.colors.error100,
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnOk: {
    width: 100,
    padding: 5,
    marginTop: 20,
  },
});
