import parse from 'node-html-parser';
import { SearchResponse } from '../../types/models/search/search.types';
import { decodeHTMLEntities } from './decodeHTMLEntities';

export const htmlStringToResponse = (html: string): SearchResponse => {
  const response: SearchResponse = [];

  // remove "·" from html string to parse more easily
  html = html.split("<span class='sep'>&middot;</span>").join('');

  const root = parse(html);

  const items_list = root!.querySelectorAll('.autocompletion_item');

  for (const item of items_list) {
    const main_item = item.querySelector('.main_item')?.innerText.replace(/(\r\n|\n|\r)/gm, '');
    const main_item_lid = item.querySelector('.main_item')?.getAttribute('lid');
    const main_item_lc = item.querySelector('.main_item')?.getAttribute('lc');

    const translation_items_list = item.querySelectorAll('.translation_item');
    const translation_items_words = [];
    for (const translation_item of translation_items_list) {
      const text = translation_item.childNodes[0].rawText.replace(/(\r\n|\n|\r)/gm, '');
      const type =
        translation_item.childNodes[1]?.rawText.replace(/(\r\n|\n|\r)/gm, '') || undefined;
      const bid = translation_item.getAttribute('bid');
      translation_items_words.push({
        text: decodeHTMLEntities(text),
        type,
        bid,
      });
    }

    response.push({
      mainItem: {
        text: decodeHTMLEntities(main_item || ''),
        lid: main_item_lid,
        lc: main_item_lc,
      },
      translationItems: translation_items_words,
    });
  }

  return response;
};
