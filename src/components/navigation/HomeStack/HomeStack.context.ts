import { createContext } from 'react';
import { HomeStackContextProps } from './HomeStack.types';

export const HomeStackContext = createContext<HomeStackContextProps>({} as HomeStackContextProps);
