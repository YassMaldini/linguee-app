import {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { useTheme } from '@shopify/restyle';
import { forwardRef, useCallback, useMemo } from 'react';

import { Platform } from 'react-native';
import { BottomModalProps } from './BottomModal.types';
import Box from '../Box/Box';
import { Theme } from '../../../utils/theme/theme';

const BottomModal = forwardRef<BottomSheetModal, BottomModalProps>(({ children }, ref) => {
  const theme = useTheme<Theme>();

  const initialSnapPoints = useMemo(() => ['50%'], []);

  const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModal
      {...{ ref }}
      index={0}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      enablePanDownToClose
      onChange={handleSheetChanges}
      enableDismissOnClose
      backgroundStyle={{
        backgroundColor: theme.colors.highlightBackground,
      }}
      handleStyle={{
        backgroundColor: theme.colors.highlightBackground,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
      }}
      handleIndicatorStyle={{
        backgroundColor: theme.colors.secondaryText,
        width: 40,
      }}>
      <BottomSheetView testID="bottomSheet" onLayout={handleContentLayout}>
        <Box
          flex={1}
          backgroundColor="highlightBackground"
          paddingBottom={Platform.OS === 'android' ? 'xxs' : 'm'}>
          {children}
        </Box>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default BottomModal;
