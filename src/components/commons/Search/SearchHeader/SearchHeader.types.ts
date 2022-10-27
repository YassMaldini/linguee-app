import { querySearch } from '../../../../hooks/useSearch/useSearch.actions';
import { ValidTypeFromYupSchema } from '../../../../utils/form/helpers';
import getSearchHeaderSchema from './SearchHeader.schema';

export type SearchHeaderSchema = ValidTypeFromYupSchema<typeof getSearchHeaderSchema>;

export interface SearchHeaderMutationVariables {
  search: string;
}

export type SearchHeaderMutation = (
  variables: SearchHeaderMutationVariables
) => ReturnType<typeof querySearch>;
