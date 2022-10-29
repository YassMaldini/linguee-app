import Box from '../../../designSystem/Box/Box';
import Image from '../../../designSystem/Image/Image';
import TextInput from '../../../designSystem/TextInput/TextInput';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import LogoIcon from '../../../../../assets/images/logo_white.png';
import SmallLogoIcon from '../../../../../assets/images/small_logo_white.png';
import CrossIcon from '../../../../../assets/images/ic_highlight_remove_grey_800_18dp.png';
import Text from '../../../designSystem/Text/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../../utils/theme/theme';
import { useContext, useRef } from 'react';
import { ActivityIndicator, TextInput as RNTextInput, Keyboard } from 'react-native';
import Pressable from '../../../designSystem/Pressable/Pressable';
import { useMutation, useQueryClient } from 'react-query';
import {
  SearchHeaderMutation,
  SearchHeaderMutationVariables,
  SearchHeaderSchema,
} from './SearchHeader.types';
import { searchHeaderMutation } from './SearchHeader.actions';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import getSearchHeaderSchema from './SearchHeader.schema';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { USE_SEARCH_QUERY_KEY } from '../../../../hooks/useSearch/useSearch';
import { useSelector } from 'react-redux';
import { languagePairSelector } from '../../../../store/authentication/authenticationReducerSelectors';
import { LanguagePairModal } from '../LanguagePairModal/LanguagePairModal';
import { HomeStackContext } from '../../../navigation/HomeStack/HomeStack.context';
import { HomeStackScreenList } from '../../../navigation/HomeStack/HomeStack.types';

const SearchHeader = () => {
  const theme = useTheme<Theme>();
  const textInputRef = useRef<RNTextInput>(null);
  const { activeScreen, setSearchResponse, navigation } = useContext(HomeStackContext);
  const bottomModalRef = useRef<BottomSheetModal>(null);
  const queryClient = useQueryClient();
  const languagePair = useSelector(languagePairSelector);

  const formProps = useForm<SearchHeaderSchema>({
    resolver: yupResolver(getSearchHeaderSchema()),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const { control, getValues } = formProps;

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
    if (isKeyboardVisible) {
      textInputRef.current?.blur();
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
      style={{ backgroundColor: theme.colors.primaryBackground }}
      alwaysVisible
      avoidKeyboard
      androidAdjustResize>
      {({ isKeyboardVisible }) => {
        return (
          <>
            <Box flexDirection="row" alignItems="center">
              <Box padding="sToM">
                {isKeyboardVisible ? (
                  <Image source={SmallLogoIcon} width={30} height={30} />
                ) : (
                  <Image source={LogoIcon} width={75} height={30} />
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
                <Text fontSize={16} color="secondaryText">
                  {languagePair}
                </Text>
              </Pressable>
              <LanguagePairModal ref={bottomModalRef} />
            </Box>
            {mutationError && <Text>{mutationError.message}</Text>}
          </>
        );
      }}
    </KeyboardAccessoryView>
  );
};

export default SearchHeader;
