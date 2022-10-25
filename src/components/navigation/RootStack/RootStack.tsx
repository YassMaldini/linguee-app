import { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useConfigureApi } from '../../../hooks/useConfigureApi/useConfigureApi';
import getRootStackScreens from './getRootStackScreens/getRootStackScreens';
import { useFonts } from 'expo-font';
import Text from '../../designSystem/Text/Text';
import useIsSignedIn from '../../../hooks/auth/useIsSignedIn/useIsSignedIn';

const RootStack = () => {
  useConfigureApi();

  const isSignedIn = useIsSignedIn();

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../../../../assets/fonts/Roboto/Roboto-Bold.ttf')
  });

  const screens = useMemo(() => getRootStackScreens({ isSignedIn }), [isSignedIn]);

  if (!fontsLoaded) {
    return <Text>Loading for fonts...</Text>;
  }

  return <SafeAreaView style={{ flex: 1 }}>{screens}</SafeAreaView>;
};

export default RootStack;
