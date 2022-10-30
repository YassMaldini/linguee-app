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

const HomeCarouselThirdItem = () => {
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
            The Translation Search Engine
          </Text>
        </Box>
        <Box paddingVertical="m" alignItems="center">
          <Text>
            Our translation search engine scours over one billion translated texts in order to find
            the exact translation you are looking for. You can also find contextual translations of
            rarely used or slightly longer phrases.
          </Text>
          <Image
            source={ExamplesImage}
            width={exampleImageWidth}
            height={exampleImageWidth * 1.3}
            marginVertical="l"
          />
          <Text>
            If we were to print out all of the sources used while searching for a translation, there
            would be enough paper to encircle the globe.{' '}
          </Text>
          <Image
            source={WorldImage}
            width={exampleImageWidth}
            height={exampleImageWidth / 2}
            marginVertical="l"
          />
          <Text>
            The sentences displayed are not part of the Linguee dictionary and were translated by
            other people on the Internet. It is therefore a good idea to check the results.
          </Text>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default HomeCarouselThirdItem;
