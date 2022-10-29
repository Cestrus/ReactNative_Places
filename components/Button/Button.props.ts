import React from 'react';
import { PressableProps, StyleProp, ViewStyle } from 'react-native';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import glyphMap from '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Entypo.json';

type GLYPHS = keyof typeof glyphMap;

export interface IButtonProps extends PressableProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  icon?: GLYPHS;
  iconColor?: Pick<IconProps<GLYPHS>, 'color'>['color'];
  iconSize?: Pick<IconProps<GLYPHS>, 'size'>['size'];
  onPress: () => void;
}
