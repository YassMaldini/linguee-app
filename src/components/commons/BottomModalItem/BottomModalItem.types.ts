import { ReactNode } from 'react';
import { PressableProps } from '../../designSystem/Pressable/Pressable.types';

export interface BottomModalItemProps extends PressableProps {
  children: string | ReactNode;
}
