import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from 'react-query';
import configureStore from '../../../store/configureStore';
import getTheme from '../../../utils/theme/theme';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from '../../navigation/Navigation';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Application = () => {
  const { store, persistor } = configureStore();
  const queryClient = new QueryClient();

  const theme = getTheme();

  return (
    <>
      <StatusBar style="inverted" />
      <ThemeProvider {...{ theme }}>
        <StoreProvider {...{ store }}>
          <PersistGate {...{ persistor }}>
            <QueryClientProvider client={queryClient}>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <BottomSheetModalProvider>
                  <Navigation />
                </BottomSheetModalProvider>
              </GestureHandlerRootView>
            </QueryClientProvider>
          </PersistGate>
        </StoreProvider>
      </ThemeProvider>
    </>
  );
};

export default Application;
