import {
  backgroundColor,
  border,
  createRestyleComponent,
  layout,
  spacing,
  useTheme,
} from '@shopify/restyle';
import { LinearGradient } from 'expo-linear-gradient';
import { Image as RNImage } from 'react-native';

import { Theme } from '../../../utils/theme/theme';
import Box from '../Box/Box';
import { ImageProps } from './Image.types';

const Component = createRestyleComponent<ImageProps, Theme>(
  [spacing, backgroundColor, border, layout],
  RNImage
);

const Image = ({ hasStory, ...rest }: ImageProps) => {
  const theme = useTheme<Theme>();

  if (hasStory) {
    return (
      <LinearGradient
        colors={['#f99e4e', '#c53092']}
        style={{ borderRadius: 500, padding: theme.spacing.xxs }}>
        <Box padding="xs" backgroundColor="primaryBackground" style={{ borderRadius: 500 }}>
          <Component {...rest} />
        </Box>
      </LinearGradient>
    );
  }
  return <Component {...rest} />;
};

export default Image;
