import { useTranslation } from 'react-i18next';
import { TranslationTranslatedItemMain } from '../../../../types/models/translation/translation.types';
import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';

export default ({ lessCommon }: { lessCommon: TranslationTranslatedItemMain[] }) => {
  const { t } = useTranslation('translations', { keyPrefix: 'item.translated' });
  return (
    <Box>
      <Text fontSize={15} color="secondaryText" fontFamily="Roboto-Italic">
        {t('lessCommon')}
      </Text>
      <Box flexDirection="row" flexWrap="wrap" marginTop="xs">
        {lessCommon.map((lessCommonItem, index) => (
          <Box flexDirection="row" alignItems="flex-end" marginRight="l" key={index}>
            <Text fontSize={13}>{lessCommonItem.text}</Text>
            <Text marginLeft="s" fontSize={12} color="secondaryText" fontFamily="Roboto-Italic">
              {lessCommonItem.type}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
