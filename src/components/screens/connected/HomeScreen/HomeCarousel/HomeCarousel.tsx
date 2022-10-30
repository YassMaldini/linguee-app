import Box from '../../../../designSystem/Box/Box';
import Carousel from 'react-native-reanimated-carousel';
import { Dimensions } from 'react-native';
import { useState } from 'react';
import { homeCarouselItemsList } from './HomeCarousel.data';

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

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
        height={height}
        data={homeCarouselItemsList}
        scrollAnimationDuration={600}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => item.component()}
      />
    </Box>
  );
};

export default HomeCarousel;
