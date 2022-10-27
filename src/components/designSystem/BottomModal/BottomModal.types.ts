import { BottomSheetModalProps } from '@gorhom/bottom-sheet';
import { ReactNode } from 'react';

export interface BottomModalProps extends Omit<BottomSheetModalProps, 'snapPoints' | 'children'> {
  children: ReactNode;
}
