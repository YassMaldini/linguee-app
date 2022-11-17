import { createContext } from 'react';
import { BottomTabStackContextProps } from './BottomTabStack.types';

export const BottomTabStackContext = createContext<BottomTabStackContextProps>(
  {} as BottomTabStackContextProps
);
