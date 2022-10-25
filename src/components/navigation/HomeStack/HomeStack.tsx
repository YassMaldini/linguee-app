import { Platform } from 'react-native';
import HomeScreen from '../../screens/connected/HomeScreen/HomeScreen';
import { Navigator, Screen } from './HomeStack.navigator';

const HomeStack = () => {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};

export default HomeStack;
