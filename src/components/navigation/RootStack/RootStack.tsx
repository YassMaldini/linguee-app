import { useCallback, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useConfigureApi } from '../../../hooks/useConfigureApi/useConfigureApi';
import getRootStackScreens from './getRootStackScreens/getRootStackScreens';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';
// import useIsSignedIn from '../../../hooks/auth/useIsSignedIn/useIsSignedIn';

SplashScreen.preventAutoHideAsync();

const RootStack = () => {
  useConfigureApi();

  const { colors } = useTheme<Theme>();

  const isSignedIn = true;

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../../../../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Italic': require('../../../../assets/fonts/Roboto/Roboto-Italic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const screens = useMemo(() => getRootStackScreens({ isSignedIn }), [isSignedIn]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <SafeAreaView
        edges={['top']}
        style={{ flex: 0, backgroundColor: colors.primaryBackground }}
      />
      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={{ flex: 1, backgroundColor: colors.secondaryBackground }}
        onLayout={onLayoutRootView}>
        {screens}
      </SafeAreaView>
    </>
  );
};

export default RootStack;
