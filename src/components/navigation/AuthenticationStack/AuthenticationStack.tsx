import { Platform } from 'react-native';
import SignInScreen from '../../screens/authentication/SignInScreen/SignInScreen';
import { Navigator, Screen } from './AuthenticationStack.navigator';

const AuthenticationStack = () => {
  return (
    <Navigator
      initialRouteName="SignInScreen"
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
      }}>
      <Screen name="SignInScreen" component={SignInScreen} />
    </Navigator>
  );
};

export default AuthenticationStack;
