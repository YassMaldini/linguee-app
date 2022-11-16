import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  OpacityProps,
  SpacingProps,
} from '@shopify/restyle';
import { ReactNode } from 'react';
import { PressableProps } from 'react-native';
import { Theme } from '../../../utils/theme/theme';
import TextProps from '../Text/Text.types';

export enum ButtonColors {
  Primary = 'primary',
  PrimaryOutline = 'primaryOutline',
  PrimaryText = 'primaryText',
  HighlightedText = 'HighlightedText',
}

export enum ButtonVariants {
  Contained = 'contained',
  Text = 'text',
}

export enum ButtonSizes {
  Small = 'small',
  Medium = 'medium',
}

export type ButtonPaddingData = {
  [size in ButtonSizes]: keyof Theme['spacing'];
};

export interface ButtonBaseContrastColors {
  background: keyof Theme['colors'];
  text: keyof Theme['colors'];
}

export type ButtonColorsData = {
  [color in ButtonColors]: {
    regular: ButtonBaseContrastColors;
    disabled?: ButtonBaseContrastColors;
  };
};

export interface ButtonProps
  extends SpacingProps<Theme>,
    LayoutProps<Theme>,
    BorderProps<Theme>,
    OpacityProps<Theme>,
    BackgroundColorProps<Theme>,
    Omit<PressableProps, 'style'> {
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  color?: ButtonColors;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  isBold?: boolean;
  textProps?: TextProps;
}
