import { SearchHeaderContentProps } from './SearchHeaderContent.types';
import { useContext, useEffect, useRef } from 'react';
import { ActivityIndicator, TextInput as RNTextInput, Keyboard } from 'react-native';
import Pressable from '../../../../designSystem/Pressable/Pressable';
import { useMutation, useQueryClient } from 'react-query';
import {
  SearchHeaderMutation,
  SearchHeaderMutationVariables,
  SearchHeaderSchema,
} from '../SearchHeader.types';
import { fetchCopiedText, searchHeaderMutation } from '../SearchHeader.actions';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import getSearchHeaderSchema from '../SearchHeader.schema';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { USE_SEARCH_QUERY_KEY } from '../../../../../hooks/useSearch/useSearch';
import { useSelector } from 'react-redux';
import { LanguagePairModal } from '../../LanguagePairModal/LanguagePairModal';
import { BottomTabStackContext } from '../../../../navigation/BottomTabStack/BottomTabStack.context';
import {
  HomeStackProps,
  HomeStackScreenList,
} from '../../../../navigation/HomeStack/HomeStack.types';
import {
  clipboardEnabledSelector,
  languagePairSelector,
} from '../../../../../store/translation/translationReducerSelectors';
import { darkModeSelector } from '../../../../../store/main/mainReducerSelectors';
import WhiteLogoIcon from '../../../../../../assets/images/logo_white.png';
import ColoredLogoIcon from '../../../../../../assets/images/new_logo_colored.png';
import SmallWhiteLogoIcon from '../../../../../../assets/images/small_logo_white.png';
import SmallColoredLogoIcon from '../../../../../../assets/images/small_logo.png';
import CrossIcon from '../../../../../../assets/images/ic_highlight_remove_grey_800_18dp.png';
import Text from '../../../../designSystem/Text/Text';
import Box from '../../../../designSystem/Box/Box';
import Image from '../../../../designSystem/Image/Image';
import TextInput from '../../../../designSystem/TextInput/TextInput';
import { useNavigation } from '@react-navigation/native';

const SearchHeaderContent = ({ isKeyboardVisible }: SearchHeaderContentProps) => {
  const textInputRef = useRef<RNTextInput>(null);
  const isDarkMode = useSelector(darkModeSelector);
  const navigation = useNavigation<HomeStackProps['navigation']>();
  const { activeScreen, setSearchResponse, selectedWord } = useContext(BottomTabStackContext);
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

  useEffect(() => {
    if (selectedWord) {
      setValue('search', selectedWord);
    }
  }, [selectedWord]);

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
    <Box testID="screenHeader">
      <Box flexDirection="row" alignItems="center">
        <Box padding="sToM">
          {isKeyboardVisible ? (
            <Image
              testID="shortLogoIcon"
              source={isDarkMode ? SmallWhiteLogoIcon : SmallColoredLogoIcon}
              width={30}
              height={30}
            />
          ) : (
            <Image
              testID="fullLogoIcon"
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
                testID="searchInput"
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
          {isLoading && <ActivityIndicator testID="loader" size="small" />}
          {getValues('search') && getValues('search').length > 0 && (
            <Pressable testID="cross" onPress={() => onPressCross(isKeyboardVisible)}>
              <Image source={CrossIcon} width={20} height={20} marginRight="s" />
            </Pressable>
          )}
        </Box>
        <Pressable testID="languagePicker" padding="sToM" onPress={openLanguagePairModal}>
          <Text fontSize={16} color="languagePickerButton">
            {languagePair}
          </Text>
        </Pressable>
        <LanguagePairModal ref={bottomModalRef} />
      </Box>
      {mutationError && <Text testID="errorText">{mutationError.message}</Text>}
    </Box>
  );
};

export default SearchHeaderContent;
