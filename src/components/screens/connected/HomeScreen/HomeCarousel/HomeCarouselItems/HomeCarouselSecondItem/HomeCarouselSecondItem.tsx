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

const HomeCarouselSecondItem = () => {
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
            The Dictionary
          </Text>
        </Box>
        <Box paddingVertical="m" alignItems="center">
          <Text>
            Linguee's editorial dictionary can be found at the very top of the search results page.
          </Text>
          <Image
            source={DictionaryImage}
            width={dictionaryImageWidth}
            height={dictionaryImageWidth * 1.4}
            marginVertical="l"
          />
          <Text>
            Several new features will help you find the desired information as quickly as possible.
            For example, autocompletion allows the most important translations to be shown after
            entering only the first few letters of a word:
          </Text>
          <Image
            source={AutocompletionImage}
            width={autocompletionImageWidth}
            height={autocompletionImageWidth * 1.66}
            marginVertical="l"
          />
          <Text>Tap on a term in the results to obtain further information:</Text>
          <Image
            source={ChosenImage}
            width={autocompletionImageWidth}
            height={autocompletionImageWidth * 1.66}
            marginVertical="l"
          />
          <Text>
            We are fully committed to creating the largest and most reliable modern-day dictionary
            in the world. Over 400 professional editors are currently working on the development of
            our dictionaries.{' '}
          </Text>
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
