import Box from '../../../../../../designSystem/Box/Box';
import Image from '../../../../../../designSystem/Image/Image';
import ColoredLogoImage from '../../../../../../../../assets/images/large_logo.png';
import WhiteLogoImage from '../../../../../../../../assets/images/linguee_logo_weiss_big.png';
import SwipeImage from '../../../../../../../../assets/images/swipe_left.png';
import Text from '../../../../../../designSystem/Text/Text';
import { useContext, useMemo } from 'react';
import { HomeStackContext } from '../../../../../../navigation/HomeStack/HomeStack.context';
import { Orientation } from 'expo-screen-orientation';
import { useSelector } from 'react-redux';
import { darkModeSelector } from '../../../../../../../store/main/mainReducerSelectors';

const HomeCarouselFirstItem = () => {
  const isDarkMode = useSelector(darkModeSelector);
  const { currentScreenOrientation } = useContext(HomeStackContext);
  const width = 200;
  const swipeImageWidth = 165;
  const isLandscape = useMemo(() => {
    if (
      currentScreenOrientation === Orientation.LANDSCAPE_LEFT ||
      currentScreenOrientation === Orientation.LANDSCAPE_RIGHT
    ) {
      return true;
    } else {
      return false;
    }
  }, [currentScreenOrientation]);

  return (
    <Box flex={1} paddingVertical="l" justifyContent={!isLandscape ? 'center' : undefined}>
      <Box alignItems="center" marginBottom="xxxl">
        <Image
          source={isDarkMode ? WhiteLogoImage : ColoredLogoImage}
          width={width}
          height={width / 2.5}
          marginBottom="sToM"
        />
        <Text textAlign="center" fontSize={16}>
          The New Dictionary
        </Text>
      </Box>
      <Box
        padding="m"
        height={210}
        alignItems="center"
        borderTopWidth={1}
        borderTopColor="highlightBackground">
        <Text textAlign="center" fontSize={16}>
          For further information
        </Text>
        <Text textAlign="center" fontSize={16}>
          slide to the left.
        </Text>
        <Image
          source={SwipeImage}
          width={swipeImageWidth}
          height={swipeImageWidth / 1.9}
          marginTop="s"
          marginBottom="sToM"
        />
      </Box>
    </Box>
  );
};

export default HomeCarouselFirstItem;
