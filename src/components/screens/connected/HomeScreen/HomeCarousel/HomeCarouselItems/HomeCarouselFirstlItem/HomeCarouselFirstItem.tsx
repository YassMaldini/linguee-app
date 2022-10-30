import Box from '../../../../../../designSystem/Box/Box';
import Image from '../../../../../../designSystem/Image/Image';
import LogoImage from '../../../../../../../../assets/images/linguee_logo_weiss_big.png';
import SwipeImage from '../../../../../../../../assets/images/swipe_left.png';
import Text from '../../../../../../designSystem/Text/Text';

const HomeCarouselFirstItem = () => {
  const width = 200;
  const swipeImageWidth = 165;
  return (
    <Box flex={1} padding="l" justifyContent="center">
      <Box alignItems="center" marginBottom="xxxl">
        <Image source={LogoImage} width={width} height={width / 2.5} marginBottom="sToM" />
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
