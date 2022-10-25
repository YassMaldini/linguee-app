import { createTheme } from '@shopify/restyle';
import COMMONS_COLORS from './colors/commons';

const getTheme = () =>
  createTheme({
    colors: { ...COMMONS_COLORS },
    spacing: {
      none: 0,
      xxs: 2,
      xs: 4,
      s: 8,
      sToM: 12,
      m: 16,
      mToL: 20,
      l: 24,
      xl: 48,
      xxl: 86,
      xxxl: 112,
    },
    layout: {
      none: 0,
      xxs: 2,
      xs: 4,
      s: 8,
      sToM: 12,
      m: 16,
      mToL: 20,
      l: 24,
      xl: 48,
      xxl: 86,
      xxxl: 112,
    },
    borderRadii: {
      none: 0,
      xxs: 2,
      xs: 4,
      s: 8,
      m: 16,
      l: 40,
      xl: 60,
      xxl: 500,
    },
    breakpoints: {
      phone: 0,
      tablet: 768,
      largeTablet: 1024,
    },
    textVariants: {
      defaults: {
        color: 'primaryText',
        fontFamily: 'Roboto-Regular',
      },
      title: {
        fontWeight: 800,
      },
    },
  });

export default getTheme;

export type Theme = ReturnType<typeof getTheme>;
