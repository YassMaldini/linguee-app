import { useQuery } from 'react-query';
import { TranslationResponse } from '../../types/models/translation/translation.types';
import { queryTranslation } from './useTranslation.actions';
import { UseTranslationOptions } from './useTranslation.types';

export const USE_TRANSLATION_QUERY_KEY = 'USE_TRANSLATION';

const useTranslation = ({ url, wt }: UseTranslationOptions) => {
  const options = {
    ajax: 1,
    cw: 369,
    wt,
  };

  // const options = {
  //   source: 'auto'
  // }

  return useQuery<TranslationResponse, Error>(
    [USE_TRANSLATION_QUERY_KEY],
    () => queryTranslation({ url, options }),
    {
      enabled: true,
    }
  );
};

export default useTranslation;
