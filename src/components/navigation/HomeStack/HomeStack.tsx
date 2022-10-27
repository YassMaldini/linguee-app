import HomeScreen from '../../screens/connected/HomeScreen/HomeScreen';
import { Navigator, Screen } from './HomeStack.navigator';

const HomeStack = () => {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};

export default HomeStack;
