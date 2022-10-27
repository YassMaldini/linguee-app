import api from '../../utils/api/api';
import { QuerySearchOptions } from './useSearch.types';
import { htmlStringToResponse } from '../../utils/html/htmlStringToResponse';
import { LanguagePairEndpoints } from '../../utils/api/languages/languagePairEndpoints';

const PREFIX = '[querySearch]';

export const querySearch = async ({ languagePair, options }: QuerySearchOptions) => {
  console.log(PREFIX, `Fetching search page...`);

  const currentLanguagePairEndpoint = LanguagePairEndpoints[languagePair];

  const response = await api.get(`/${currentLanguagePairEndpoint}/search`, options, {
    responseType: 'text',
    transformResponse: (data) => data,
    headers: {
      Host: 'android.linguee.com',
      Accept: '*/*',
      'X-Requested-With': 'XMLHttpRequest',
      'User-Agent':
        'Linguee/1.3.0.29065 (Android:REL12; API:32; ABI:x86_64,arm64-v8a; Chrome:91.0.4472.114; Device:emulator64_x86_64_arm64; Model:sdk_gphone64_x86_64)',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Dest': 'empty',
      'Accept-Encoding': 'gzip, deflate',
      'Accept-Language': 'en-US,en;q=0.9',
      Cookie:
        'ForeignLang=FR; app=v%3D1.3.0%26r%3D29065%26os%3DAndroid_32; il=EN; cookie=395d917d-b580-28ad-ecb6-e10f6223bc66:5',
    },
  });

  const { problem, data } = response;

  if (problem) {
    throw data;
  }

  console.log(PREFIX, `Received search page.`);
  return htmlStringToResponse(data as string);
};
