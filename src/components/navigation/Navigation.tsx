import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useMemo } from 'react';
import getTheme from '../../utils/theme/theme';
import RootStack from './RootStack/RootStack';
import { useSelector } from 'react-redux';
import { darkModeSelector } from '../../store/main/mainReducerSelectors';
import { StatusBar } from 'expo-status-bar';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const Navigation = (): JSX.Element => {
  const isDarkMode = useSelector(darkModeSelector);

  const theme = useMemo(() => getTheme(isDarkMode), [isDarkMode]);

  const navigationTheme = useMemo(() => {
    return {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        background: theme.colors.primaryBackground,
      },
    };
  }, []);

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <ThemeProvider {...{ theme }}>
        <BottomSheetModalProvider>
          <SafeAreaProvider style={{ backgroundColor: theme.colors.primaryBackground }}>
            <RootStack />
          </SafeAreaProvider>
        </BottomSheetModalProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default Navigation;
