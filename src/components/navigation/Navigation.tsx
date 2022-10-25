import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useMemo } from 'react';
import { Theme } from '../../utils/theme/theme';
import RootStack from './RootStack/RootStack';

const Navigation = (): JSX.Element => {
  const theme = useTheme<Theme>();

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
      <SafeAreaProvider style={{ backgroundColor: theme.colors.primaryBackground }}>
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Navigation;
