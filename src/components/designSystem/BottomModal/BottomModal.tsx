import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { forwardRef } from 'react';
import Box from '../Box/Box';
import { BottomModalProps } from './BottomModal.types';

export const BottomModal = forwardRef<BottomSheetModal, BottomModalProps>(({ ...rest }, ref) => {
  return (
    <BottomSheetModal {...rest} {...{ ref }}>
      <Box flex={1}></Box>
    </BottomSheetModal>
  );
});
