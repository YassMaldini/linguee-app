import { useContext } from 'react';
import { Alert, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCliboardEnabled } from '../../../store/translation/translation/translationActions';
import { clipboardEnabledSelector } from '../../../store/translation/translationReducerSelectors';
import Box from '../../designSystem/Box/Box';
import { HomeStackContext } from '../../navigation/HomeStack/HomeStack.context';
import SettingsModalItem from './SettingsModalItem/SettingsModalItem';
import SettingsModalTitle from './SettingsModalTitle/SettingsModalTitle';

const SettingsModal = () => {
  const dispatch = useDispatch();
  const { isSettingsModalVisible, setSettingsModalVisible } = useContext(HomeStackContext);
  const isCliboardEnabled = useSelector(clipboardEnabledSelector);
  const toggleSwitch = () => setCliboardEnabled(!isCliboardEnabled)(dispatch);

  const MODAL_SIZE = Dimensions.get('window').width * 0.8;

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
        <Box
          flex={1}
          // position="relative"
          // bottom={50}
          alignItems="center"
          justifyContent="center">
          <TouchableWithoutFeedback onPress={(e) => e.preventDefault()}>
            <Box
              width={MODAL_SIZE}
              height={MODAL_SIZE}
              padding="m"
              paddingRight="none"
              borderRadius="m"
              backgroundColor="secondaryBackground">
              <SettingsModalTitle title="Settings" />
              <SettingsModalItem
                label="Look up clipboard content"
                {...{ toggleSwitch, isEnabled: isCliboardEnabled }}
              />
            </Box>
          </TouchableWithoutFeedback>
        </Box>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SettingsModal;
