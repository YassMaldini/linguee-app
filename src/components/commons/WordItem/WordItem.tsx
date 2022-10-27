import { SearchResponseObject } from '../../../types/models/search/search.types';
import Box from '../../designSystem/Box/Box';
import Chip from '../../designSystem/Chip/Chip';
import { ChipColors } from '../../designSystem/Chip/Chip.types';
import Pressable from '../../designSystem/Pressable/Pressable';
import Text from '../../designSystem/Text/Text';

const WordItem = (item: SearchResponseObject) => {
  return (
    <Pressable paddingHorizontal="m">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingVertical="sToM"
        paddingHorizontal="xs"
        borderBottomWidth={1}
        borderBottomColor="highlightBackground">
        <Box flex={1}>
          <Box flexDirection="row" alignItems="flex-end">
            <Text color="highlightedText" fontSize={17}>
              {item.mainItem.text}
            </Text>
            <Text
              marginLeft="s"
              fontSize={12}
              lineHeight={20}
              color="secondaryText"
              fontFamily="Roboto-Italic">
              n
            </Text>
          </Box>
          <Box flex={1} flexDirection="row" flexWrap="wrap">
            {item.translationItems?.map(
              (translationItem, index) =>
                index < 3 && (
                  <Box flexDirection="row" marginRight="m" key={index}>
                    <Text fontSize={12}>{translationItem.text}</Text>
                    {translationItem.type && (
                      <Text marginLeft="s" color="secondaryText" fontFamily="Roboto-Italic">
                        {translationItem.type}
                      </Text>
                    )}
                  </Box>
                )
            )}
          </Box>
        </Box>
        <Box>
          <Chip color={ChipColors.PrimaryOutline}>more</Chip>
        </Box>
      </Box>
    </Pressable>
  );
};

export default WordItem;
