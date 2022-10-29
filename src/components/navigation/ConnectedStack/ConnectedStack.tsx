import { Platform } from 'react-native';
import HomeStack from '../HomeStack/HomeStack';
import { Navigator, Screen } from './ConnectedStack.navigator';

const ConnectedStack = () => {
  return (
    <Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
      }}>
      {/* <Screen name="ConnectedBottomTab" component={ConnectedBottomTab} /> */}
      <Screen name="HomeStack" component={HomeStack} />
    </Navigator>
  );
};

export default ConnectedStack;
