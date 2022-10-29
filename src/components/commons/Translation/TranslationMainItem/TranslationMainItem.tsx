import { TranslationResponseMainItem } from '../../../../types/models/translation/translation.types';
import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';

const TranslationMainItem = (item: TranslationResponseMainItem) => {
  return (
    <Box marginBottom="s">
      <Box flexDirection="row" alignItems="flex-end">
        <Text marginRight="sToM" fontSize={20} color="highlightedText">
          {item.text}
        </Text>
        {item.context && <Text marginRight="sToM">{item.context}</Text>}
        <Text color="secondaryText" fontFamily="Roboto-Italic" lineHeight={22}>
          {item.wordtype}
        </Text>
      </Box>
    </Box>
  );
};

export default TranslationMainItem;
