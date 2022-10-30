import { HomeCarouselItemsList } from './HomeCarousel.types';
import HomeCarouselFirstItem from './HomeCarouselItems/HomeCarouselFirstlItem/HomeCarouselFirstItem';
import HomeCarouselSecondItem from './HomeCarouselItems/HomeCarouselSecondItem/HomeCarouselSecondItem';
import HomeCarouselThirdItem from './HomeCarouselItems/HomeCarouselThirdItem/HomeCarouselThirdItem';

export const homeCarouselItemsList: HomeCarouselItemsList[] = [
  { component: HomeCarouselFirstItem },
  { component: HomeCarouselSecondItem },
  { component: HomeCarouselThirdItem },
];
