import { useCallback, useContext, useEffect } from 'react';
import Box from '../../../designSystem/Box/Box';
import SearchItem from '../../../commons/Search/SearchItem/SearchItem';
import { SearchResponseObject } from '../../../../types/models/search/search.types';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { HomeStackContext } from '../../../navigation/HomeStack/HomeStack.context';
import { useNavigation } from '@react-navigation/native';
import { TranslationScreenProps } from '../TranslationScreen/TranslationScreen.types';
import { HomeStackScreenList } from '../../../navigation/HomeStack/HomeStack.types';

const HomeScreen = () => {
  const { setActiveScreen } = useContext(HomeStackContext);
  const navigation = useNavigation<TranslationScreenProps['navigation']>();

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

  return (
    <Box flex={1}>
      <FlashList
        data={searchResponse}
        {...{ renderItem }}
        estimatedItemSize={20}
        keyboardDismissMode="on-drag"
      />
    </Box>
  );
};

export default HomeScreen;
