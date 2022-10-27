import { querySearch } from '../../../../hooks/useSearch/useSearch.actions';
import { LanguagePair } from '../../../../types/models/languages/languagePair.types';
import { SearchHeaderMutationVariables } from './SearchHeader.types';

export const searchHeaderMutation = ({
  languagePair,
  search,
}: SearchHeaderMutationVariables & { languagePair: LanguagePair }) => {
  const options = {
    qe: search,
    source: 'auto',
    cw: 369,
    acs: 2,
  };

  return querySearch({ languagePair, options });
};
