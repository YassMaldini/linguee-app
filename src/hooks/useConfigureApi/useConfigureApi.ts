import { ApiResponse } from 'apisauce';
import { useCallback, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/authentication/authenticationActions/authenticationActions';
import api from '../../utils/api/api';

const PREFIX = '[useConfigureApi]';

export const useConfigureApi = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const monitor = useCallback(
    (response: ApiResponse<any, any>) => {
      if (response.status === 403) {
        console.log(PREFIX, 'Detected 403 status code... Request url was:', response.config?.url);
        signOut(queryClient)(dispatch);
      }
    },
    [queryClient]
  );

  useEffect(() => {
    console.log(PREFIX, `api base url: ${api.getBaseURL()}`);

    api.addMonitor(monitor);

    console.log('api.headers', api.headers);
  }, [monitor]);

  return api;
};
