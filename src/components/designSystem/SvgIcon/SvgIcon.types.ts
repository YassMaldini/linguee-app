import { ColorProps, LayoutProps, OpacityProps, SpacingProps } from '@shopify/restyle';
import { FC } from 'react';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Theme } from '../../../utils/theme/theme';

export interface SvgIconProps
  extends ColorProps<Theme>,
    SpacingProps<Theme>,
    LayoutProps<Theme>,
    OpacityProps<Theme> {
  icon: FC<SvgProps>;
  style?: ViewStyle;
}
