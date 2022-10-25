import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  profileSelector,
  secretsSelector,
} from '../../../store/authentication/authenticationReducerSelectors';
import api from '../../../utils/api/api';

const useIsSignedIn = () => {
  const secrets = useSelector(secretsSelector);
  const profile = useSelector(profileSelector);

  return useMemo(() => {
    const isSignedId = Boolean(secrets && profile);
    if (isSignedId && secrets && profile) {
      api.setHeaders({
        // ...
      });
    }

    return isSignedId;
  }, [secrets, profile]);
};

export default useIsSignedIn;
