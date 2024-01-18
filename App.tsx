import React from 'react';
import {Text} from 'react-native';

import ScreenStacks from './src/screens';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {persistor, store} from './src/store';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ScreenStacks />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
