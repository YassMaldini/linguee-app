import Pressable from '../../designSystem/Pressable/Pressable';
import Text from '../../designSystem/Text/Text';
import { BottomModalItemProps } from './BottomModalItem.types';

const BottomModalItem = ({ children, ...rest }: BottomModalItemProps) => {
  return (
    <Pressable alignItems="center" padding="sToM" {...rest}>
      {typeof children === 'string' ? (
        <Text alignSelf="center" fontSize={18}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

export default BottomModalItem;
