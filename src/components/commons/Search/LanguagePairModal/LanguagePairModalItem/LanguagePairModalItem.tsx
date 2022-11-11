import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguagePair } from '../../../../../store/translation/translation/translationActions';
import { SvgIcon } from '../../../../designSystem/SvgIcon/SvgIcon';
import Text from '../../../../designSystem/Text/Text';
import BottomModalItem from '../../../BottomModalItem/BottomModalItem';
import { LanguagePairModalItemProps } from './LanguagePairModalItem.types';
import DoubleArrowIcon from '../../../../../../assets/vectors/exchange.svg';
import Box from '../../../../designSystem/Box/Box';

const LanguagePairModalItem = ({
  languagePair,
  closeModal,
  ...rest
}: LanguagePairModalItemProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('languages', { keyPrefix: 'pair' });

  const selectLanguage = () => {
    setLanguagePair(languagePair)(dispatch);
    closeModal();
  };

  const languages = t(languagePair, { returnObjects: true });

  return (
    <BottomModalItem onPress={selectLanguage} {...rest}>
      <Box flexDirection="row" alignItems="center">
        <Text alignSelf="center" fontSize={18}>
          {languages[0]}
        </Text>
        <SvgIcon
          icon={DoubleArrowIcon}
          color="primaryText"
          width={16}
          height={16}
          marginHorizontal="s"
        />
        <Text alignSelf="center" fontSize={18}>
          {languages[1]}
        </Text>
      </Box>
    </BottomModalItem>
  );
};

export default LanguagePairModalItem;
