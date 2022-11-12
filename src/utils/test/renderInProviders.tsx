import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@shopify/restyle';
import { render } from '@testing-library/react-native';
import { ReactNode } from 'react';
import getTheme from '../theme/theme';

const renderInProviders = (children: ReactNode) =>
  render(
    <ThemeProvider theme={getTheme()}>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </ThemeProvider>
  );

export default renderInProviders;
