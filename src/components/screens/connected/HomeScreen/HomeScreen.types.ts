import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReelsTrayFeedSuccessResponseData } from '../../../../types/api/endpoints/feed/reelsTray.feed.types';
import { TimelineFeedSuccessResponseData } from '../../../../types/api/endpoints/feed/timeline.feed.types';
import { HomeStackParamsList } from '../../../navigation/HomeStack/HomeStack.types';

export interface HomeScreenContextProps {
  timeline?: TimelineFeedSuccessResponseData;
  reelsTray?: ReelsTrayFeedSuccessResponseData;
  isLoading: boolean;
  error: Error | null;
}

export type HomeScreenProps = NativeStackScreenProps<HomeStackParamsList, 'HomeScreen'>;
