import { useNavigation } from '@react-navigation/native';
import Box from '../../designSystem/Box/Box';
import Pressable from '../../designSystem/Pressable/Pressable';
import Text from '../../designSystem/Text/Text';
import LeftArrowIcon from '../../../../assets/vectors/left-arrow.svg';
import { ScreenHeaderProps } from './ScreenHeader.types';
import { ConnectedStackProps } from '../../navigation/ConnectedStack/ConnectedStack.types';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';

const ScreenHeader = ({
  showGoBackTouchable,
  showGoBackLabel,
  goBackIconColor,
  title,
  rightElement,
}: ScreenHeaderProps) => {
  const { goBack } = useNavigation<ConnectedStackProps['navigation']>();

  return (
    <Box paddingVertical="s" flexDirection="row" alignItems="center" justifyContent="space-between">
      {showGoBackTouchable && (
        <Pressable onPress={goBack} padding="s" flexDirection="row" alignItems="center">
          {/* <Image source={LeftArrowBlue} width={48} height={48} /> */}
          <SvgIcon icon={LeftArrowIcon} color={goBackIconColor} width={24} height={24} />
          {showGoBackLabel && (
            <Text marginLeft="xxs" fontSize={16} color="primaryButton">
              Back
            </Text>
          )}
        </Pressable>
      )}
      {title && (
        <Text fontSize={18} fontWeight="800">
          {title}
        </Text>
      )}
      <Box minWidth={42}>{rightElement}</Box>
    </Box>
  );
};

export default ScreenHeader;
