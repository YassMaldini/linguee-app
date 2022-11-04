import { Dispatch, SetStateAction } from 'react';

export interface SettingsModalItemProps {
  label: string;
  isEnabled?: boolean;
  toggleSwitch: Dispatch<SetStateAction<boolean>>;
}
