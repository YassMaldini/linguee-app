import { useTheme } from '@shopify/restyle';
import { Switch } from 'react-native';
import { Theme } from '../../../../utils/theme/theme';
import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';
import { SettingsModalItemProps } from './SettingsModalItem.types';

const SettingsModalItem = ({ label, toggleSwitch, isEnabled = true }: SettingsModalItemProps) => {
  const { colors } = useTheme<Theme>();

  return (
    <Box padding="m" flexDirection="row" alignItems="center" justifyContent="space-between">
      <Text fontSize={17}>{label}</Text>
      <Switch
        trackColor={{ false: '#767577', true: colors.primaryButton }}
        thumbColor={isEnabled ? colors.white : colors.highlightBackground}
        ios_backgroundColor={colors.highlightBackground}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Box>
  );
};

export default SettingsModalItem;
