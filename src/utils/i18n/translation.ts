import authenticationFR from '../../../assets/locales/fr/authenticationFR.json';
import authenticationEN from '../../../assets/locales/en/authenticationEN.json';

const TRANSLATIONS = Object.freeze({
  en: {
    translation: {
      test: "Here's a test !",
    },
    authentication: authenticationEN,
  },
  fr: {
    translation: {
      test: 'Ceci est un test !',
    },
    authentication: authenticationFR,
  },
});

export default TRANSLATIONS;
