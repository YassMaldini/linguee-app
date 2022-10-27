import { Platform } from 'react-native';
import BottomTab from '../../commons/BottomTab/BottomTab';
import HomeScreen from '../../screens/connected/HomeScreen/HomeScreen';
import { Navigator, Screen } from './ConnectedStack.navigator';

const ConnectedStack = () => {
  return (
    <>
      <Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
        }}>
        {/* <Screen name="ConnectedBottomTab" component={ConnectedBottomTab} /> */}
        <Screen name="HomeScreen" component={HomeScreen} />
      </Navigator>
      <BottomTab />
    </>
  );
};

export default ConnectedStack;
