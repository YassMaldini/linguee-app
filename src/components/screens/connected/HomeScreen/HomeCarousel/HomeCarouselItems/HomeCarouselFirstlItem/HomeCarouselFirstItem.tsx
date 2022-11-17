import Box from '../../../../../../designSystem/Box/Box';
import Image from '../../../../../../designSystem/Image/Image';
import ColoredLogoImage from '../../../../../../../../assets/images/new_large_logo.png';
import WhiteLogoImage from '../../../../../../../../assets/images/linguee_logo_weiss_big.png';
import SwipeImage from '../../../../../../../../assets/images/new_swipe_left.png';
import Text from '../../../../../../designSystem/Text/Text';
import { useContext, useMemo } from 'react';
import { BottomTabStackContext } from '../../../../../../navigation/BottomTabStack/BottomTabStack.context';
import { Orientation } from 'expo-screen-orientation';
import { useSelector } from 'react-redux';
import { darkModeSelector } from '../../../../../../../store/main/mainReducerSelectors';
import { useTranslation } from 'react-i18next';

const HomeCarouselFirstItem = () => {
  const { t } = useTranslation('carousel', { keyPrefix: 'first' });
  const isDarkMode = useSelector(darkModeSelector);
  const { currentScreenOrientation } = useContext(BottomTabStackContext);
  const width = 210;
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
          resizeMode="contain"
          marginBottom="sToM"
        />
        <Text textAlign="center" fontSize={16}>
          {t('subtitle')}
        </Text>
      </Box>
      <Box
        padding="m"
        height={210}
        alignItems="center"
        borderTopWidth={1}
        borderTopColor="highlightBackground">
        <Text textAlign="center" fontSize={16}>
          {t('swipe.further')}
        </Text>
        <Text textAlign="center" fontSize={16}>
          {t('swipe.slide')}
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
