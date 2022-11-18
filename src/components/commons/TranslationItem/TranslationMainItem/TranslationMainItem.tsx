import { TranslationResponseMainItem } from '../../../../types/models/translation/translation.types';
import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';

const TranslationMainItem = (item: TranslationResponseMainItem) => {
  return (
    <Box testID="translationMainItem">
      <Box flexDirection="row" alignItems="flex-end">
        <Text
          testID="translationMainItemText"
          marginRight="sToM"
          fontSize={20}
          color="highlightedText">
          {item.text}
        </Text>
        {item.context && (
          <Text marginRight="sToM" lineHeight={22}>
            {item.context}
          </Text>
        )}
        <Text
          testID="translationMainItemWt"
          color="secondaryText"
          fontFamily="Roboto-Italic"
          lineHeight={22}>
          {item.wordtype}
        </Text>
      </Box>
    </Box>
  );
};

export default TranslationMainItem;
