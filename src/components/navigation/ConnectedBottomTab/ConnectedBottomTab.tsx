import { Navigator, Screen } from './ConnectedBottomTab.navigator';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';
import HomeStack from '../HomeStack/HomeStack';
import { useSelector } from 'react-redux';
import { profileSelector } from '../../../store/authentication/authenticationReducerSelectors';
import { User } from '../../../types/models/user/User.types';

const ConnectedBottomTab = () => {
  const theme = useTheme<Theme>();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 1,
          borderTopColor: 'rgba(0, 0, 0, .04)',
          backgroundColor: theme.colors.primaryBackground,
        },
      }}>
      <Screen
        name="HomeStack"
        component={HomeStack}
        // options={{
        //   tabBarLabel: () => null,
        //   tabBarIcon: () => <SvgIcon color="primaryText" width={28} height={28} icon={HomeIcon} />,
        // }}
      />
    </Navigator>
  );
};

export default ConnectedBottomTab;
