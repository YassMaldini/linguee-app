import { createContext } from 'react';
import { HomeScreenContextProps } from './HomeScreen.types';

export const HomeContext = createContext<HomeScreenContextProps>({} as HomeScreenContextProps);
