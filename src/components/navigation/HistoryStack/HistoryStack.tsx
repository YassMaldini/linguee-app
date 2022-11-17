import { Fragment } from 'react';
import HistoryScreen from '../../screens/connected/HistoryScreen/HistoryScreen';
import { Navigator, Screen } from './HistoryStack.navigator';
import { HistoryStackScreenList } from './HistoryStack.types';

const HistoryStack = () => {
  return (
    <Fragment>
      <Navigator
        initialRouteName={HistoryStackScreenList.HistoryScreen}
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name={HistoryStackScreenList.HistoryScreen} component={HistoryScreen} />
      </Navigator>
    </Fragment>
  );
};

export default HistoryStack;
