import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { forwardRef, RefObject } from 'react';
import { LanguagePair } from '../../../../types/models/languages/languagePair.types';
import BottomModal from '../../../designSystem/BottomModal/BottomModal';
import LanguagePairModalItem from './LanguagePairModalItem/LanguagePairModalItem';

export const LanguagePairModal = forwardRef<any, any>((rest, ref) => {
  const closeModal = () => {
    (ref as RefObject<BottomSheetModalMethods>).current?.dismiss();
  };

  return (
    <BottomModal {...{ ref }}>
      {Object.keys(LanguagePair).map((languagePair, index) => (
        <LanguagePairModalItem
          key={index}
          // @ts-ignore
          languagePair={LanguagePair[languagePair]}
          {...{ closeModal }}
        />
      ))}
    </BottomModal>
  );
});
