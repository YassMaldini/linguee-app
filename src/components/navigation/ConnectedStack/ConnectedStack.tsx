import { Platform } from 'react-native';
import BottomTabStack from '../BottomTabStack/BottomTabStack';
import { Navigator, Screen } from './ConnectedStack.navigator';

const ConnectedStack = () => {
  return (
    <Navigator
      initialRouteName="BottomTabStack"
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
      }}>
      {/* <Screen name="ConnectedBottomTab" component={ConnectedBottomTab} /> */}
      <Screen name="BottomTabStack" component={BottomTabStack} />
    </Navigator>
  );
};

export default ConnectedStack;
