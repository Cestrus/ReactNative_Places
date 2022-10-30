import React from 'react';
import { Entypo } from '@expo/vector-icons';

import { Pressable, View, Text, StyleSheet } from 'react-native';
import { IButtonProps } from './Button.props';
import { GlobalStyles } from '../../styles/globalStyles';

const Button: React.FC<IButtonProps> = ({ children, style, onPress, icon, iconColor, iconSize }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, style]}>
        {icon && <Entypo name={icon} size={iconSize} color={iconColor} />}
        {children && (
          <View style={styles.textWrap}>
            <Text style={styles.text}>{children}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: GlobalStyles.colors.primary100,
    borderRadius: 10,
    borderWidth: 2,
    padding: 2,
    justifyContent: 'center',
  },
  // iconWrap: {},
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  textWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
