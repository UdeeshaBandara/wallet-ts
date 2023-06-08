import React from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './Navigators/AppNavigator';
import { navigationRef } from './Navigators/Root';
import { TabContextProvider } from './Navigators/TabContext';

import { useTheme } from './Theme';

const App = () => {
  const { NavigationTheme } = useTheme();

  return (
    <BottomSheetModalProvider>
      {/**
       * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
       * and saved to redux.
       * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
       * for example `loading={<SplashScreen />}`.
       * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
       */}

      <TabContextProvider>
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <AppNavigator />
        </NavigationContainer>
      </TabContextProvider>
    </BottomSheetModalProvider>
  );
};

export default App;
