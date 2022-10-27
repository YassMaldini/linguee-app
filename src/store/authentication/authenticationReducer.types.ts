import { LanguagePair } from '../../types/models/languages/languagePair.types';
import { Secrets } from '../../types/models/secrets/secrets.types';
import { User } from '../../types/models/user/User.types';

interface AuthenticationReducerState {
  profile: User | null;
  secrets: Secrets | null;
  languagePair: LanguagePair;
}

export default AuthenticationReducerState;
