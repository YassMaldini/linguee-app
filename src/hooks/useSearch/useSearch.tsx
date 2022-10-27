import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { languagePairSelector } from '../../store/authentication/authenticationReducerSelectors';
import { SearchResponse } from '../../types/models/search/search.types';
import { querySearch } from './useSearch.actions';
import { UseSearchOptions } from './useSearch.types';

export const USE_SEARCH_QUERY_KEY = 'USE_SEARCH';

const useSearch = ({ key }: UseSearchOptions) => {
  const languagePair = useSelector(languagePairSelector);

  const options = {
    qe: key,
    source: 'auto',
    cw: 369,
    acs: 2,
  };

  return useQuery<SearchResponse, Error>([USE_SEARCH_QUERY_KEY], () =>
    querySearch({ languagePair, options })
  );
};

export default useSearch;
