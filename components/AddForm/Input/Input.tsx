import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../../styles/globalStyles';

import { IInputProps } from './Input.prop';

const Input: React.FC<IInputProps> = ({ label, style, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  label: {
    color: 'white',
    fontSize: 16,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  input: {
    borderColor: GlobalStyles.colors.primary100,
    borderWidth: 2,
    borderRadius: 8,
    height: 40,
    paddingLeft: 10,
    color: 'white',
    fontSize: 16,
    backgroundColor: GlobalStyles.colors.primary200,
  },
});
