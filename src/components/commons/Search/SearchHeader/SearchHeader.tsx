import Box from '../../../designSystem/Box/Box';
import Image from '../../../designSystem/Image/Image';
import TextInput from '../../../designSystem/TextInput/TextInput';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import WhiteLogoIcon from '../../../../../assets/images/logo_white.png';
import ColoredLogoIcon from '../../../../../assets/images/logo_colored.png';
import SmallWhiteLogoIcon from '../../../../../assets/images/small_logo_white.png';
import SmallColoredLogoIcon from '../../../../../assets/images/small_logo.png';
import CrossIcon from '../../../../../assets/images/ic_highlight_remove_grey_800_18dp.png';
import Text from '../../../designSystem/Text/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../../utils/theme/theme';
import { useContext, useEffect, useRef } from 'react';
import { ActivityIndicator, TextInput as RNTextInput, Keyboard } from 'react-native';
import Pressable from '../../../designSystem/Pressable/Pressable';
import { useMutation, useQueryClient } from 'react-query';
import {
  SearchHeaderMutation,
  SearchHeaderMutationVariables,
  SearchHeaderSchema,
} from './SearchHeader.types';
import { fetchCopiedText, searchHeaderMutation } from './SearchHeader.actions';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import getSearchHeaderSchema from './SearchHeader.schema';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { USE_SEARCH_QUERY_KEY } from '../../../../hooks/useSearch/useSearch';
import { useSelector } from 'react-redux';
import { LanguagePairModal } from '../LanguagePairModal/LanguagePairModal';
import { HomeStackContext } from '../../../navigation/HomeStack/HomeStack.context';
import { HomeStackScreenList } from '../../../navigation/HomeStack/HomeStack.types';
import {
  clipboardEnabledSelector,
  languagePairSelector,
} from '../../../../store/translation/translationReducerSelectors';
import { darkModeSelector } from '../../../../store/main/mainReducerSelectors';

const SearchHeader = () => {
  const theme = useTheme<Theme>();
  const textInputRef = useRef<RNTextInput>(null);
  const isDarkMode = useSelector(darkModeSelector);
  const { activeScreen, setSearchResponse, navigation } = useContext(HomeStackContext);
  const bottomModalRef = useRef<BottomSheetModal>(null);
  const queryClient = useQueryClient();
  const languagePair = useSelector(languagePairSelector);
  const isCliboardEnabled = useSelector(clipboardEnabledSelector);

  const formProps = useForm<SearchHeaderSchema>({
    resolver: yupResolver(getSearchHeaderSchema()),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const { control, getValues, setValue } = formProps;

  useEffect(() => {
    if (isCliboardEnabled) {
      (async () => {
        const copiedText = await fetchCopiedText();
        if (copiedText !== '' && copiedText.split(' ').length < 3) {
          setValue('search', copiedText);
          mutate({ search: copiedText });
        }
      })();
    }
  }, [isCliboardEnabled]);

  const {
    mutate,
    isLoading,
    error: mutationError,
  } = useMutation<Awaited<ReturnType<SearchHeaderMutation>>, Error, SearchHeaderMutationVariables>(
    ({ search }) => searchHeaderMutation({ languagePair, search }),
    {
      mutationKey: USE_SEARCH_QUERY_KEY,
      onMutate: () => queryClient.cancelMutations(),
      onSuccess: async (resp) => {
        if (activeScreen !== HomeStackScreenList.HomeScreen)
          navigation.navigate(HomeStackScreenList.HomeScreen);
        setSearchResponse(resp);
      },
      onError: async (error) => console.log('error', error.message),
    }
  );

  const onPressCross = (isKeyboardVisible: boolean) => {
    textInputRef.current?.clear();
    setValue('search', '');
    setSearchResponse(undefined);
    if (isKeyboardVisible) {
      // textInputRef.current?.blur();
    } else {
      textInputRef.current?.focus();
    }
  };

  const openLanguagePairModal = () => {
    bottomModalRef.current?.present();
    Keyboard.dismiss();
  };

  return (
    <KeyboardAccessoryView
      style={{
        backgroundColor: theme.colors.primaryBackground,
        borderTopColor: theme.colors.primaryBackground,
      }}
      alwaysVisible
      avoidKeyboard
      androidAdjustResize>
      {({ isKeyboardVisible }) => {
        return (
          <Box visible={activeScreen !== HomeStackScreenList.HistoryScreen}>
            <Box flexDirection="row" alignItems="center">
              <Box padding="sToM">
                {isKeyboardVisible ? (
                  <Image
                    source={isDarkMode ? SmallWhiteLogoIcon : SmallColoredLogoIcon}
                    width={30}
                    height={30}
                  />
                ) : (
                  <Image
                    source={isDarkMode ? WhiteLogoIcon : ColoredLogoIcon}
                    width={75}
                    height={30}
                  />
                )}
              </Box>
              <Box
                flex={1}
                flexDirection="row"
                alignItems="center"
                borderRadius="s"
                backgroundColor="highlightBackground">
                <Controller
                  name="search"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      flex={1}
                      ref={textInputRef}
                      onChangeText={(text) => {
                        onChange(text);
                        mutate({ search: text });
                      }}
                      fontSize={16}
                      color="primaryText"
                      backgroundColor="highlightBackground"
                      selectTextOnFocus
                      {...{ value }}
                    />
                  )}
                  {...{ control }}
                />
                {isLoading && <ActivityIndicator size="small" />}
                {getValues('search') && getValues('search').length > 0 && (
                  <Pressable onPress={() => onPressCross(isKeyboardVisible)}>
                    <Image source={CrossIcon} width={20} height={20} marginRight="s" />
                  </Pressable>
                )}
              </Box>
              <Pressable padding="sToM" onPress={openLanguagePairModal}>
                <Text fontSize={16} color="languagePickerButton">
                  {languagePair}
                </Text>
              </Pressable>
              <LanguagePairModal ref={bottomModalRef} />
            </Box>
            {mutationError && <Text>{mutationError.message}</Text>}
          </Box>
        );
      }}
    </KeyboardAccessoryView>
  );
};

export default SearchHeader;
