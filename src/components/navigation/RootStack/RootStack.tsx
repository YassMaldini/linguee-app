import { useCallback, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useConfigureApi } from '../../../hooks/useConfigureApi/useConfigureApi';
import getRootStackScreens from './getRootStackScreens/getRootStackScreens';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// import useIsSignedIn from '../../../hooks/auth/useIsSignedIn/useIsSignedIn';

SplashScreen.preventAutoHideAsync();

const RootStack = () => {
  useConfigureApi();

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
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {screens}
    </SafeAreaView>
  );
};

export default RootStack;
