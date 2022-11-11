import Box from '../../../../../../designSystem/Box/Box';
import Image from '../../../../../../designSystem/Image/Image';
import WorldImage from '../../../../../../../../assets/images/world.png';
import ExamplesImage from '../../../../../../../../assets/images/examples.png';
import Text from '../../../../../../designSystem/Text/Text';
import { Dimensions } from 'react-native';
import { useState } from 'react';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../../../../../utils/theme/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

const HomeCarouselThirdItem = () => {
  const { t } = useTranslation('carousel', { keyPrefix: 'third' });
  const theme = useTheme<Theme>();
  const [height, setHeight] = useState<number>(Dimensions.get('window').height);

  const exampleImageWidth = Dimensions.get('window').width * 0.75;

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ height }}>
      <Box
        padding="m"
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setHeight(height + theme.spacing.xxl * 2);
        }}>
        <Box padding="s" borderBottomWidth={2} borderBottomColor="highlightBackground">
          <Text textAlign="center" fontSize={20}>
            {t('title')}
          </Text>
        </Box>
        <Box paddingVertical="m" alignItems="center">
          <Text>{t('paragraphs.first')}</Text>
          <Image
            source={ExamplesImage}
            width={exampleImageWidth}
            height={exampleImageWidth * 1.3}
            marginVertical="l"
          />
          <Text>{t('paragraphs.second')} </Text>
          <Image
            source={WorldImage}
            width={exampleImageWidth}
            height={exampleImageWidth / 2}
            marginVertical="l"
          />
          <Text>{t('paragraphs.third')}</Text>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default HomeCarouselThirdItem;
