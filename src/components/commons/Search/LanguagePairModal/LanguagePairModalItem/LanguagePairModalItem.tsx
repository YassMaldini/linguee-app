import { useDispatch } from 'react-redux';
import { setLanguagePair } from '../../../../../store/authentication/authenticationActions/authenticationActions';
import BottomModalItem from '../../../BottomModalItem/BottomModalItem';
import { LanguagePairModalItemProps } from './LanguagePairModalItem.types';

const LanguagePairModalItem = ({
  languagePair,
  closeModal,
  ...rest
}: LanguagePairModalItemProps) => {
  const dispatch = useDispatch();

  const selectLanguage = () => {
    setLanguagePair(languagePair)(dispatch);
    closeModal();
  };

  return (
    <BottomModalItem onPress={selectLanguage} {...rest}>
      {languagePair}
    </BottomModalItem>
  );
};

export default LanguagePairModalItem;
