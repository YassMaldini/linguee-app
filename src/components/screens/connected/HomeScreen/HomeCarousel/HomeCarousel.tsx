import Box from '../../../../designSystem/Box/Box';
import Carousel from 'react-native-reanimated-carousel';
import { Platform } from 'react-native';
import { useContext, useMemo, useState } from 'react';
import { Orientation } from 'expo-screen-orientation';
import { homeCarouselItemsList } from './HomeCarousel.data';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { HomeStackContext } from '../../../../navigation/HomeStack/HomeStack.context';

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { currentScreenOrientation } = useContext(HomeStackContext);
  const { width: screenWidth, height: screenHeight } = useSafeAreaFrame();

  const width = useMemo(() => {
    if (
      Platform.OS === 'ios' &&
      (currentScreenOrientation === Orientation.LANDSCAPE_LEFT ||
        currentScreenOrientation === Orientation.LANDSCAPE_RIGHT)
    ) {
      return screenWidth * 0.89;
    } else {
      return screenWidth;
    }
  }, [screenWidth, currentScreenOrientation, Platform]);

  return (
    <Box flex={1}>
      <Box flexDirection="row" alignItems="center" justifyContent="center">
        {homeCarouselItemsList.map((item, index) => {
          const size = index === activeIndex ? 10 : 6;
          return (
            <Box
              width={size}
              height={size}
              borderRadius="m"
              marginRight="s"
              backgroundColor="highlightBackground"
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
