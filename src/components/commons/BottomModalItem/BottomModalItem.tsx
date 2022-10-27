import Pressable from '../../designSystem/Pressable/Pressable';
import Text from '../../designSystem/Text/Text';
import { BottomModalItemProps } from './BottomModalItem.types';

const BottomModalItem = ({ children, ...rest }: BottomModalItemProps) => {
  return (
    <Pressable padding="sToM" {...rest}>
      <Text alignSelf="center" fontSize={18}>
        {children}
      </Text>
    </Pressable>
  );
};

export default BottomModalItem;
