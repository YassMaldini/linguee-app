import { useContext } from 'react';
import { Orientation } from 'expo-screen-orientation';
import { HomeStackContext } from '../../components/navigation/HomeStack/HomeStack.context';

export const useIsLandscape = () => {
  const { currentScreenOrientation } = useContext(HomeStackContext);

  if (
    currentScreenOrientation === Orientation.LANDSCAPE_LEFT ||
    currentScreenOrientation === Orientation.LANDSCAPE_RIGHT
  ) {
    return true;
  } else {
    return false;
  }
};
