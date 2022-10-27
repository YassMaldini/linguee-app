import Box from '../../designSystem/Box/Box';
import Image from '../../designSystem/Image/Image';
import LeftArrowIcon from '../../../../assets/images/ic_keyboard_arrow_left_black_36dp.png';
import RightArrowIcon from '../../../../assets/images/ic_keyboard_arrow_right_black_36dp.png';
import ClockIcon from '../../../../assets/images/ic_query_builder_black_36dp.png';
import InfoIcon from '../../../../assets/images/ic_info_outline_black_36dp.png';
import SettingsIcon from '../../../../assets/images/ic_settings_black_36dp.png';
import ShareIcon from '../../../../assets/vectors/share.svg';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';
import Pressable from '../../designSystem/Pressable/Pressable';

const BottomTab = () => {
  return (
    <Box
      backgroundColor="secondaryBackground"
      height={50}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingVertical="m"
      paddingHorizontal="mToL">
      <Box flexDirection="row" alignItems="center">
        <Image source={LeftArrowIcon} width={36} height={36} />
        <Image source={ClockIcon} width={28} height={28} />
        <Image source={RightArrowIcon} width={36} height={36} />
      </Box>
      <Pressable
        style={{
          position: 'relative',
          bottom: 0.5,
        }}>
        <SvgIcon icon={ShareIcon} width={26} height={26} color="iconDisabled" />
      </Pressable>
      <Image source={InfoIcon} width={28} height={28} />
      <Image source={SettingsIcon} width={28} height={28} />
    </Box>
  );
};

export default BottomTab;
