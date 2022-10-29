import { TranslationResponse } from '../../../types/models/translation/translation.types';

export const translationResponseMock: TranslationResponse = {
  examples: [
    {
      main: {
        text: 'heat sink',
        type: 'n',
        url: '/english-french/translation/heat+sink.html',
      },
      translations: [
        {
          text: 'dissipateur thermique',
          type: 'm',
          url: '/french-english/translation/dissipateur+thermique.html',
        },
        {
          text: 'puits thermique',
          type: 'm',
          url: '/french-english/translation/puits+thermique.html',
        },
        {
          text: 'puits de chaleur',
          type: 'm',
          url: '/french-english/translation/puits+de+chaleur.html',
        },
        {
          text: 'drain thermique',
          type: 'm',
          url: '/french-english/translation/drain+thermique.html',
        },
      ],
    },
    {
      main: {
        text: 'kitchen sink',
        type: 'n',
        url: '/english-french/translation/kitchen+sink.html',
      },
      translations: [
        {
          text: 'évier de cuisine',
          type: 'm',
          url: '/french-english/translation/%C3%A9vier+de+cuisine.html',
        },
      ],
    },
    {
      main: {
        text: 'carbon sink',
        type: 'n',
        url: '/english-french/translation/carbon+sink.html',
      },
      translations: [
        {
          text: 'puits de carbone',
          type: 'm',
          url: '/french-english/translation/puits+de+carbone.html',
        },
      ],
    },
  ],
  main: [
    {
      mainItem: {
        context: undefined,
        text: 'sink',
        url: '/english-french/translation/sink.html',
        wordtype: 'noun',
      },
      translatedItem: {
        examples: [
          {
            original: 'The sink is full of dirty dishes.',
            translation: "L'évier est rempli de vaisselle sale.",
          },
          {
            original: 'Something is clogging the sink in the kitchen.',
            translation: "Quelque chose bouche l'évier de la cuisine.",
          },
          {
            original: 'I went to the sink to wash my hands.',
            translation: 'Je suis allé au lavabo pour me laver les mains. ',
          },
        ],
        lessCommon: [
          {
            text: 'cloaque',
            type: 'm',
            url: '/french-english/translation/cloaque.html',
          },
        ],
        main: {
          text: 'lavabo',
          type: 'm',
          url: '/french-english/translation/lavabo.html',
        },
      },
    },
    {
      mainItem: {
        context: 'sth.',
        text: 'sink',
        url: '/english-french/translation/sink.html',
        wordtype: 'verb',
      },
      translatedItem: {
        examples: [
          {
            original: 'The infamous ocean liner sank off the coast of Greenland.',
            translation: 'Le tristement célèbre paquebot a coulé au large du Groenland.',
          },
          {
            original: 'Some trees sink their roots very deep into the ground.',
            translation: 'Certains arbres plongent leurs racines très profondément dans le sol.',
          },
          {
            original: 'My brother helped sink wells in dry places.',
            translation: 'Mon frère a aidé à forer des puits dans des endroits secs.',
          },
          {
            original: 'Oil prices have sunk for the third time in a year.',
            translation: 'Le prix du pétrole a baissé pour la troisième fois en un an.',
          },
        ],
        lessCommon: [
          {
            text: 'enfoncer',
            type: 'v',
            url: '/french-english/translation/enfoncer.html',
          },
          {
            text: 'tomber',
            type: 'v',
            url: '/french-english/translation/tomber.html',
          },
          {
            text: 'sombrer',
            type: 'v',
            url: '/french-english/translation/sombrer.html',
          },
          {
            text: 'descendre',
            type: 'v',
            url: '/french-english/translation/descendre.html',
          },
          {
            text: 'disparaître',
            type: 'v',
            url: '/french-english/translation/disparaître.html',
          },
          {
            text: 'se coucher',
            type: 'v',
            url: '/french-english/translation/se+coucher.html',
          },
          {
            text: 'creuser',
            type: 'v',
            url: '/french-english/translation/creuser.html',
          },
          {
            text: 'redescendre',
            type: 'v',
            url: '/french-english/translation/redescendre.html',
          },
        ],
        main: {
          text: 'baisser',
          type: 'v',
          url: '/french-english/translation/baisser.html',
        },
      },
    },
  ],
};
