import Box from '../../../../../../designSystem/Box/Box';
import Image from '../../../../../../designSystem/Image/Image';
import AutocompletionImage from '../../../../../../../../assets/images/autocompletion.png';
import DictionaryImage from '../../../../../../../../assets/images/dictionary.png';
import ChosenImage from '../../../../../../../../assets/images/chosen.png';
import EditorsImage from '../../../../../../../../assets/images/editors.png';
import Text from '../../../../../../designSystem/Text/Text';
import { Dimensions, Platform } from 'react-native';
import { useState } from 'react';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../../../../../utils/theme/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

const HomeCarouselSecondItem = () => {
  const { t } = useTranslation('carousel', { keyPrefix: 'second' });
  const theme = useTheme<Theme>();
  const [height, setHeight] = useState<number>(Dimensions.get('window').height);

  const dictionaryImageWidth = Dimensions.get('window').width * 0.75;
  const autocompletionImageWidth = Dimensions.get('window').width * 0.75;

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ height }}>
      <Box
        padding="m"
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setHeight(height + (Platform.OS === 'ios' ? theme.spacing.xxl : theme.spacing.xl) * 2);
        }}>
        <Box padding="s" borderBottomWidth={2} borderBottomColor="highlightBackground">
          <Text textAlign="center" fontSize={20}>
            {t('title')}
          </Text>
        </Box>
        <Box paddingVertical="m" alignItems="center">
          <Text>{t('paragraphs.first')}</Text>
          <Image
            source={DictionaryImage}
            width={dictionaryImageWidth}
            height={dictionaryImageWidth * 1.4}
            marginVertical="l"
          />
          <Text>{t('paragraphs.second')}</Text>
          <Image
            source={AutocompletionImage}
            width={autocompletionImageWidth}
            height={autocompletionImageWidth * 1.66}
            marginVertical="l"
          />
          <Text>{t('paragraphs.third')}</Text>
          <Image
            source={ChosenImage}
            width={autocompletionImageWidth}
            height={autocompletionImageWidth * 1.66}
            marginVertical="l"
          />
          <Text>{t('paragraphs.forth')} </Text>
          <Image
            source={EditorsImage}
            width={autocompletionImageWidth}
            height={autocompletionImageWidth / 1.85}
            marginVertical="l"
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default HomeCarouselSecondItem;
