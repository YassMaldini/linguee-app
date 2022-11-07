import { useCallback, useContext, useEffect } from 'react';
import Box from '../../../designSystem/Box/Box';
import SearchItem from '../../../commons/Search/SearchItem/SearchItem';
import { SearchResponseObject } from '../../../../types/models/search/search.types';
import { FlashList, FlashListProps, ListRenderItem } from '@shopify/flash-list';
import { HomeStackContext } from '../../../navigation/HomeStack/HomeStack.context';
import { useNavigation } from '@react-navigation/native';
import { TranslationScreenProps } from '../TranslationScreen/TranslationScreen.types';
import { HomeStackScreenList } from '../../../navigation/HomeStack/HomeStack.types';
import HomeCarousel from './HomeCarousel/HomeCarousel';

const HomeScreen = () => {
  const { setActiveScreen, currentScreenOrientation } = useContext(HomeStackContext);
  const navigation = useNavigation<TranslationScreenProps['navigation']>();

  useEffect(
    () => console.log('currentScreenOrientation', currentScreenOrientation),
    [currentScreenOrientation]
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setActiveScreen(HomeStackScreenList.HomeScreen);
    });

    return unsubscribe;
  }, [navigation]);

  const { searchResponse } = useContext(HomeStackContext);

  const renderItem = useCallback<ListRenderItem<SearchResponseObject>>(
    ({ item }) => <SearchItem {...item} />,
    [searchResponse]
  );

  const CallbackFlashList = useCallback(
    (props: FlashListProps<any>) => {
      console.log(currentScreenOrientation);
      return <FlashList {...props} />;
    },
    [currentScreenOrientation]
  );

  return (
    <Box flex={1}>
      <CallbackFlashList
        data={searchResponse}
        {...{ renderItem }}
        ListEmptyComponent={<HomeCarousel />}
        estimatedItemSize={20}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
      />
    </Box>
  );
};

export default HomeScreen;
