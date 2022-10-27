import { useMemo, useState } from 'react';
import Box from '../../../designSystem/Box/Box';
import WordItem from '../../../commons/WordItem/WordItem';
import SearchHeader from '../../../commons/Search/SearchHeader/SearchHeader';
import { HomeContext } from './HomeScreen.context';
import { HomeScreenContextProps } from './HomeScreen.types';
import { SearchResponse } from '../../../../types/models/search/search.types';
import { FlashList } from '@shopify/flash-list';

const HomeScreen = () => {
  const [searchResponse, setSearchResponse] = useState<SearchResponse>();

  const contextValue = useMemo<HomeScreenContextProps>(
    () => ({ searchResponse, setSearchResponse }),
    [searchResponse, setSearchResponse]
  );

  return (
    <HomeContext.Provider value={contextValue}>
      <Box flex={1}>
        <SearchHeader />
        <FlashList
          data={searchResponse}
          renderItem={({ item }) => <WordItem {...item} />}
          estimatedItemSize={20}
          keyboardDismissMode="on-drag"
        />
      </Box>
    </HomeContext.Provider>
  );
};

export default HomeScreen;
