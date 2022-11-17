import Box from '../../../../designSystem/Box/Box';
import Carousel from 'react-native-reanimated-carousel';
import { Platform } from 'react-native';
import { useContext, useMemo, useState } from 'react';
import { homeCarouselItemsList } from './HomeCarousel.data';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { BottomTabStackContext } from '../../../../navigation/BottomTabStack/BottomTabStack.context';
import { isLandscape } from '../../../../../utils/orientation/isLandscape';

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { currentScreenOrientation } = useContext(BottomTabStackContext);
  const { width: screenWidth, height: screenHeight } = useSafeAreaFrame();
  const isPortrait = !isLandscape(currentScreenOrientation);

  const width = useMemo(() => {
    if (Platform.OS === 'ios' && !isPortrait) {
      return screenWidth * 0.89;
    } else {
      return screenWidth;
    }
  }, [screenWidth, currentScreenOrientation, Platform]);

  return (
    <Box flex={1} backgroundColor="primaryBackground">
      <Box flexDirection="row" alignItems="center" justifyContent="center">
        {homeCarouselItemsList.map((item, index) => {
          const size = index === activeIndex ? 10 : 6;
          return (
            <Box
              width={size}
              height={size}
              borderRadius="m"
              marginRight="s"
              backgroundColor="carouselPagination"
              key={index}
            />
          );
        })}
      </Box>
      <Carousel
        style={{ flex: 1 }}
        width={width}
        height={screenHeight}
        data={homeCarouselItemsList}
        scrollAnimationDuration={600}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => item.component()}
      />
    </Box>
  );
};

export default HomeCarousel;
