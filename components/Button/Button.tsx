import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Pressable, View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { IButtonProps } from './Button.props';
import { GlobalStyles } from '../../styles/globalStyles';

const Button: React.FC<IButtonProps> = ({ children, style, onPress, icon, iconColor, iconSize }) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }): StyleProp<ViewStyle> => (pressed ? [styles.pressed, styles.press] : styles.press)}
      >
        {icon && (
          <View style={styles.iconWrap}>
            <Entypo name={icon} size={iconSize} color={iconColor} />
          </View>
        )}
        {children && (
          <View style={styles.textWrap}>
            <Text style={styles.text}>{children}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconWrap: {
    alignItems: 'center',
    padding: 2,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: GlobalStyles.colors.primary100,
  },
  textWrap: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  press: {
    flex: 1,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 10,
  },
});
