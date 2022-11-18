import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../../utils/theme/theme';
import SearchHeaderContent from './SearchHeaderContent/SearchHeaderContent';

const SearchHeader = () => {
  const theme = useTheme<Theme>();

  return (
    <KeyboardAccessoryView
      style={{
        backgroundColor: theme.colors.primaryBackground,
        borderTopColor: theme.colors.primaryBackground,
      }}
      alwaysVisible
      avoidKeyboard
      adjustResize>
      {({ isKeyboardVisible }) => {
        return <SearchHeaderContent {...{ isKeyboardVisible }} />;
      }}
    </KeyboardAccessoryView>
  );
};

export default SearchHeader;
