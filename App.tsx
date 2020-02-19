/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { AppStateContext, IAppState, DEFAULT_APP_STATE } from './typescript/context/AppState';
import MainPage from './typescript/MainPage';
import { getAppState } from './typescript/util/Storage';


const App = () => {
  const [appState, setAppState] = useState<IAppState | any>({
    ...DEFAULT_APP_STATE
  });

  useEffect(() => {
    let _appState: IAppState;

    const fetchAppState = async () => {
      _appState = await getAppState();
      setAppState({ ..._appState });
    };

    fetchAppState();
  }, []);

  return (
    <AppStateContext.Provider value={appState}>
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <MainPage />
        </SafeAreaView>
      </Fragment>
    </AppStateContext.Provider>

  );
};

export default App;
