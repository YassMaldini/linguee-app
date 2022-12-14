import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';
import { SettingsModalTitleProps } from './SettingsModalTitle.types';

const SettingsModalTitle = ({ title }: SettingsModalTitleProps) => {
  return (
    <Box marginTop="s" padding="s" borderBottomWidth={1} borderBottomColor="gray4">
      <Text fontSize={16} color="gray4" fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
};

export default SettingsModalTitle;
