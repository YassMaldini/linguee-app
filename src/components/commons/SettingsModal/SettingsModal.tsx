import { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setDarkMode } from '../../../store/main/mainActions/mainActions';
import { darkModeSelector } from '../../../store/main/mainReducerSelectors';
import { setCliboardEnabled } from '../../../store/translation/translation/translationActions';
import { clipboardEnabledSelector } from '../../../store/translation/translationReducerSelectors';
import { isLandscape } from '../../../utils/orientation/isLandscape';
import Box from '../../designSystem/Box/Box';
import { HomeStackContext } from '../../navigation/HomeStack/HomeStack.context';
import SettingsModalItem from './SettingsModalItem/SettingsModalItem';
import SettingsModalTitle from './SettingsModalTitle/SettingsModalTitle';

const SettingsModal = () => {
  const { t } = useTranslation('settings', { keyPrefix: 'modal.settings' });
  const dispatch = useDispatch();
  const { isSettingsModalVisible, setSettingsModalVisible, currentScreenOrientation } =
    useContext(HomeStackContext);
  const isDarkMode = useSelector(darkModeSelector);
  const isCliboardEnabled = useSelector(clipboardEnabledSelector);
  const clipboardSwitch = () => setCliboardEnabled(!isCliboardEnabled)(dispatch);
  const darkModeSwitch = () => setDarkMode(!isDarkMode)(dispatch);

  const isPortrait = useMemo(
    () => !isLandscape(currentScreenOrientation),
    [currentScreenOrientation]
  );

  const MODAL_SIZE = isPortrait
    ? Dimensions.get('window').width * 0.8
    : Dimensions.get('window').height * 0.8;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isSettingsModalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setSettingsModalVisible(!isSettingsModalVisible);
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          setSettingsModalVisible(false);
        }}>
        <Box flex={1} alignItems="center" justifyContent="center">
          <TouchableWithoutFeedback onPress={(e) => e.preventDefault()}>
            <Box
              width={MODAL_SIZE}
              height={MODAL_SIZE}
              padding="m"
              paddingRight="none"
              borderRadius="m"
              backgroundColor="secondaryBackground"
              {...(!isPortrait && {
                borderWidth: 0.5,
                borderColor: 'gray6',
              })}>
              <SettingsModalTitle title={t('title')} />
              <SettingsModalItem
                label={t('list.clipboard')}
                toggleSwitch={clipboardSwitch}
                isEnabled={isCliboardEnabled}
              />
              <SettingsModalItem
                label={t('list.darkMode')}
                toggleSwitch={darkModeSwitch}
                isEnabled={isDarkMode}
              />
            </Box>
          </TouchableWithoutFeedback>
        </Box>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SettingsModal;
